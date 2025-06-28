import { ExportOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Flex, Layout, Result, Spin, Table } from "antd";
import { orderCentralTableColumnDefault } from "../configuration/orderCentralTableColumnDefault";
import PageToolbar from "../components/layout/PageToolbar";
import Section from "../components/layout/Section";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import FoodFusionApiClient from "../api/FoodFusionApiClient";

export default function OrderCentral() {

    const pageToolbar = {
        title: 'Central de Pedidos',
        description: 'Gerencie, acompanhe e finalize todos os seus pedidos em um só lugar.',
        actions: [{
            key: 'export',
            type: 'default',
            label: 'Exportar',
            tooltip: { title: 'Exportar' },
            icon: <ExportOutlined />,
            onClick: null
        }, {
            key: 'new-establishment',
            type: 'primary',
            label: 'Novo',
            tooltip: { title: 'Novo Estabelecimento' },
            icon: <PlusOutlined />,
            onClick: null
        }],
        settings: {}
    }

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await FoodFusionApiClient({
                    endpoint: '/orders',
                    method: 'GET'
                });
                setOrders(data.body);
            } catch (err) {
                setError(err.message || 'Erro ao buscar pedidos.')
            } finally {
                setLoading(false);
            }
        }
        fetchOrders();
    }, []);


    const onSearch = async (value) => {

        setLoading(true);

        const searchTerm = value.toLowerCase();

        try {
            const data = await FoodFusionApiClient({
                endpoint: `/orders/by-status?status=${value}`,
                method: 'GET'
            });
            setOrders(data.body);
        } catch (err) {
            setError(err.message || 'Erro ao buscar pedidos.')
        } finally {
            setLoading(false);
        }
    };

    const handleRowClick = (record) => {
        const url = `${window.location.href}/${record.id}`;
        window.location.href = url
    }

    return (
        <Layout>

            <Flex vertical gap={'large'}>

                <Flex vertical gap={'large'}>

                    <PageToolbar
                        title={pageToolbar.title}
                        description={pageToolbar.description}
                        actions={pageToolbar.actions}
                        breadcrumb={[
                            { title: <a href="/">Home</a> },
                            { title: <a href="/orders">Central de Pedidos</a> }]}
                        settings={pageToolbar.settings} />

                    <Search size="large" onSearch={onSearch} placeholder="Pesquise pedidos por nome, cliente, tipo de estabelecimento ou status..." enterButton='Buscar' />

                    <Card variant="borderless">

                        <Section title={'Últimos Pedidos'} description={'Visualize rapidamente os pedidos mais recentes realizados no sistema. Acompanhe o status, revise os detalhes e gerencie cada etapa com facilidade e agilidade.'} helper={{ tooltip: 'Veja os últimos pedidos recebidos e mantenha o controle das vendas em tempo real.' }} contents={
                            loading ? (
                                <Flex vertical align="center" justify="center" style={{ minHeight: '50vh' }} gap={'small'}>
                                    <Flex align="center" gap={'small'}>
                                        <Spin size="large" tip='Carregando dados da API' />
                                    </Flex>
                                </Flex>) : (<Flex vertical gap={'small'}>
                                    <Flex vertical justify="center" flex={1}>
                                        {orders ?
                                            <Table
                                                bordered
                                                scroll={{ x: 'max-content' }}
                                                rowKey={"id"}
                                                pagination={{ pageSize: 8 }}
                                                rowSelection={{ type: 'checkbox' }}
                                                onRow={(record) => ({
                                                    onClick: () => handleRowClick(record),
                                                })}
                                                columns={orderCentralTableColumnDefault}
                                                dataSource={orders} />
                                            : <Result status={'404'} title='Nenhum pedido encontrado.' subTitle='Não há pedidos para serem exibidos nesse momento.' />}
                                    </Flex>
                                </Flex>)

                        } />
                    </Card>

                </Flex>

            </Flex>

        </Layout>
    )
}
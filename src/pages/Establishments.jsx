import { ExportOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Flex, Grid, Layout, message, Result, Spin, Table } from "antd";
import Section from "../components/layout/Section";
import { useEffect, useState } from "react";
import { establishmentTableColumns } from "../configuration/extablishmentTableColumns";
import PageToolbar from "../components/layout/PageToolbar";
import FoodFusionApiClient from "../api/FoodFusionApiClient";

const { useBreakpoint } = Grid

export default function Establishments() {

    const screens = useBreakpoint()

    const pageToolbar = {
        title: 'Estabelecimentos',
        description: 'Gerencie seus estabelecimentos com total flexibilidade, permitindo personalizar cada local de forma independente.',
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

    const [establishments, setEstablishments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [messageApi, contextHolder] = message.useMessage();

    const showMessage = (type, message) => {
        messageApi.open({
            type: type,
            content: message,
        });
    };

    useEffect(() => {
        const fetchEstablishments = async () => {
            try {
                const data = await FoodFusionApiClient({
                    endpoint: '/retrieve/restaurants',
                    method: 'GET'
                });
                setEstablishments(data.body);
            } catch (err) {
                setError(err.message || 'Erro ao buscar estabelecimentos.')
                showMessage('error', 'Falha ao buscar estabelecimentos.')
            } finally {
                setLoading(false);
            }
        }
        fetchEstablishments();
    }, []);

    const handleRowClick = (record) => {
        const url = `${window.location.href}/${record.id}`;
        window.location.href = url
    }

    return (
        
        <Layout>

            {contextHolder}
            
            <Card variant="borderless" styles={{ body: { padding: 0 } }}>

                <Flex vertical gap={'small'}>

                    <Card variant="borderless">

                        <Flex vertical gap={'large'}>

                            <PageToolbar title={pageToolbar.title} description={pageToolbar.description} actions={pageToolbar.actions} settings={pageToolbar.settings} />

                            <Section title={'Meus Estabelecimentos'} helper={{ tooltip: 'Lista seus estabelecimentos permitindo personalizá-los de maneira individual. Você pode ajustar informações, horários de funcionamento, cardápios e mais, garantindo que cada estabelecimento tenha uma identidade própria. Facilite o controle e a organização com ferramentas intuitivas para uma administração eficiente.' }} contents={
                                loading ? (
                                    <Flex vertical align="center" justify="center" style={{ minHeight: '50vh' }} gap={'small'}>
                                        <Flex align="center" gap={'small'}>
                                            <Spin size="large" tip="Carregando dados da API" />
                                        </Flex>
                                    </Flex>
                                ) : error ? (<Result
                                    status={'error'}
                                    title={error.message}
                                    subTitle='Não há estabelecimentos para serem exibidos nesse momento.' />) : (
                                    <Flex vertical gap={'small'}>
                                        <Flex vertical justify="center" flex={1}>
                                            {establishments ? <Table
                                                bordered
                                                scroll={{ x: 'max-content' }}
                                                rowKey={'id'}
                                                pagination={{ pageSize: 8 }}
                                                rowSelection={{ type: 'checkbox' }}
                                                onRow={(record) => ({
                                                    onClick: () => handleRowClick(record),
                                                })}
                                                columns={establishmentTableColumns}
                                                dataSource={establishments} />
                                                : <Result status={'404'} title='Nenhum estabelecimento encontrado.' subTitle='Não há estabelecimentos para serem exibidos nesse momento.' />
                                            }
                                        </Flex>
                                    </Flex>)
                            } />

                        </Flex>

                    </Card>

                </Flex>

            </Card>

        </Layout >
    )
}
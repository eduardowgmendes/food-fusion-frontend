import { Alert, Badge, Button, Card, Col, Descriptions, Divider, Empty, Flex, Layout, List, Result, Row, Select, Spin, Statistic, Steps, Timeline } from "antd"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import FoodFusionApiClient from "../api/FoodFusionApiClient";
import Section from "../components/layout/Section";
import Paragraph from "antd/es/typography/Paragraph";
import { AppstoreAddOutlined, AppstoreFilled, AppstoreOutlined, BarsOutlined, CarOutlined, CheckCircleOutlined, ClockCircleOutlined, ClockCircleTwoTone, CloseCircleOutlined, CloseOutlined, DeleteOutlined, DollarCircleOutlined, ExportOutlined, EyeFilled, ForwardOutlined, HeatMapOutlined, LeftOutlined, LoadingOutlined, MoneyCollectOutlined, OrderedListOutlined, PlayCircleFilled, PlaySquareFilled, PlaySquareOutlined, PlusOutlined, PushpinFilled, RightOutlined, ShopFilled, ShopOutlined, SnippetsFilled, SnippetsOutlined, StarOutlined, StarTwoTone, SyncOutlined, UserOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
import RelativeTime from "../utils/RelativeTime";
import { spaceChildren } from "antd/es/button";
import PageToolbar from "../components/layout/PageToolbar";

export default function OrderOverview() {

    const { id } = useParams();

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentStep, setCurrentStep] = useState();

    useEffect(() => {
        const fetchOrderById = async (id) => {
            try {
                const data = await FoodFusionApiClient({
                    endpoint: `/orders/${id}`,
                    method: 'GET'
                });
                setOrder(data.body);
                setCurrentStep(getCurrentStepIndex(data.body.status));
            } catch (err) {
                setError(err.message || 'Erro ao buscar o pedido.')
            } finally {
                setLoading(false)
            }
        }
        fetchOrderById(id);
    }, [id]);

    const establishmentDetails = [{
        key: 'name',
        label: 'Nome',
        span: 'filled',
        children: order?.establishment?.name
    }, {
        key: 'description',
        label: 'Descrição',
        span: 'filled',
        children: order?.establishment.description
    }]

    const customerDetails = [{
        key: 'name',
        label: 'Nome Completo',
        span: 'filled',
        children: `${order?.customer?.firstName} ${order?.customer?.lastName}`
    }, {
        key: 'address',
        label: 'Endereço',
        span: 'filled',
        children: `${order?.customer?.address?.street}, ${order?.customer?.address?.localNumber} - ${order?.customer?.address?.neighborhood}, ${order?.customer?.address?.city} - ${order?.customer?.address?.state} - ${order?.customer?.address?.country} - ${order?.customer?.address?.zipcode}`
    }, {
        key: 'phone',
        label: 'Celular',
        span: 'filled',
        children: `${order?.customer?.phone?.prefix} - ${order?.customer?.phone?.phoneNumber}`
    }, {
        key: 'email',
        label: 'E-mail',
        span: 'filled',
        children: <Link type="primary" href={`mailto:${order?.customer?.email?.email}`}>{order?.customer?.email?.email}</Link>
    }]

    const getCurrentStepIndex = (status) => {
        switch (status) {
            case 'CREATED': return 0;
            case 'IN_PREPARATION': return 1;
            case 'READY': return 2;
            case 'DELIVERED': return 3;
            case 'CANCELED': return 0;
            default: return 0;
        }
    }

    const getStepStatus = (stepIndex, currentIndex, isCanceled) => {
        if (isCanceled) return "error";
        if (stepIndex < currentIndex) return "finish";
        if (stepIndex === currentIndex) return "process";
        return 'wait';
    }

    const getBadgeStatus = (status) => {
        switch (status) {
            case 'CREATED': return 'default';
            case 'IN_PREPARATION': return 'processing';
            case 'READY': return 'warning';
            case 'DELIVERED': return 'success';
            case 'CANCELED': return 'error';
            default: return 'default';
        }
    }

    const isCanceled = order?.status === 'CANCELED';

    const stepItems = [
        { title: 'Criado', status: getStepStatus(0, currentStep, isCanceled), icon: isCanceled ? <CloseCircleOutlined /> : <StarOutlined /> },
        { title: 'Preparando', status: getStepStatus(1, currentStep, isCanceled), icon: isCanceled ? <CloseCircleOutlined /> : <LoadingOutlined /> },
        { title: 'Pronto', status: getStepStatus(2, currentStep, isCanceled), icon: isCanceled ? <CloseCircleOutlined /> : <CheckCircleOutlined /> },
        { title: 'Entregue', status: getStepStatus(3, currentStep, isCanceled), icon: isCanceled ? <CloseCircleOutlined /> : <CarOutlined /> }
    ]

    const getOrderStatus = (orderStatus) => {
        switch (orderStatus) {
            case 'CREATED': return 'Criado';
            case 'IN_PREPARATION': return 'Preparando';
            case 'READY': return 'Pronto';
            case 'DELIVERED': return 'Entregue';
            case 'CANCELED': return 'Cancelado';
        }
    }

    const pageToolbar = {
        title: 'Dados do Pedido',
        actions: null,
        settings: {}
    }

    const handleOrderStatusChange = value => {
        setCurrentStep(value)
        console.log(`CurrentStep: ${currentStep}`);
    }

    const isLate = () => {
        const createdAt = new Date(order?.createdAt);
        const orderPreparationTimeLimit = new Date(createdAt.getTime() + 2 * 60 * 60 * 1000); // 2 Hours Limit
        const now = new Date();
        return now > orderPreparationTimeLimit;
    }

    const count = order?.items.length;
    const orderIsLate = isLate();

    return (

        <Layout>

            <Flex vertical gap={'large'}>

                {loading ? (<Flex vertical align="center" justify="center" style={{ minHeight: '50vh' }} gap={'small'}>
                    <Flex align="center" gap={'small'}>
                        <Spin size="large" tip='Carregando dados da API' />
                    </Flex>
                </Flex>) : (order ? (
                    <Flex vertical gap={'large'} flex={1}>

                        <PageToolbar
                            title={pageToolbar.title}
                            description={pageToolbar?.description}
                            actions={pageToolbar.actions}
                            breadcrumb={[
                                { title: <a href="/">Home</a> },
                                { title: <a href="/orders">Central de Pedidos</a> },
                                { title: <a href={window.location.href}>Dados do Pedido</a> },
                            ]} />

                        <Flex vertical gap={'small'} flex={1}>

                            <Flex vertical gap={'small'} flex={1}>

                                <Flex vertical gap={'large'} flex={1} style={{ marginBottom: '2rem' }}>
                                    <Row gutter={[16, 16]}>
                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                                            <Flex vertical flex={1} gap={'small'}>
                                                <Statistic style={{ flex: 1 }} title={'Número do Pedido'} value={order?.id} />
                                                <Statistic style={{ flex: 1 }} prefix={isCanceled ? <CloseOutlined /> : null} title={'Status'} valueStyle={{ color: isCanceled ? '#dc4446' : null }} value={getOrderStatus(order?.status)} />
                                            </Flex>
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                                            <Flex vertical flex={1} gap={'small'}>
                                                <Statistic style={{ flex: 1 }} title={'Criado'} value={RelativeTime.formatDateTime(order?.createdAt)} />
                                                <Statistic style={{ flex: 1 }} title={'Atualizado'} value={order?.updatedAt ? RelativeTime.formatDateTime(order?.updatedAt) : 'Nunca'} />
                                            </Flex>
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                                            <Flex vertical flex={1} gap={'small'}>
                                                <Statistic style={{ flex: 1 }} title={'Taxa de Entrega'} decimalSeparator="," prefix={'R$'} value={order?.deliveryTax ? order?.deliveryTax : 0.00} precision={2} />
                                                <Statistic style={{ flex: 1 }} title={'Total'} prefix={'R$'} decimalSeparator="," value={order.total} precision={2} />
                                            </Flex>
                                        </Col>
                                    </Row>
                                </Flex>
                            </Flex>
                            <Card size="small" style={{ borderColor: orderIsLate ? 'tomato' : null }}>
                                <Section icon={<PlaySquareOutlined />} title={'Progresso'} description={'Veja em que etapa o pedido se encontra, desde a criação até a entrega, e identifique facilmente seu progresso no fluxo operacional.'} helper={{ tooltip: 'Exibe o status atual do pedido, ajudando a monitorar seu avanço nas etapas de preparo, envio e entrega.' }} actions={[{
                                    type: 'select',
                                    select: {
                                        defaultValue: order?.status,
                                        size: 'large',
                                        placeholder: 'Marcar Pedido',
                                        tooltip: 'Marcar Pedido como',
                                        onChange: (value) => {
                                            console.log(value);
                                        },
                                        options: [
                                            { value: 'CREATED', label: 'Criado' },
                                            { value: 'IN_PREPARATION', label: 'Pronto' },
                                            { value: 'DELIVERED', label: 'Entregue' },
                                            { value: 'CANCELED', label: 'Cancelado' }
                                        ]
                                    }
                                }, {
                                    type: 'button',
                                    button: {
                                        size: 'large',
                                        type: 'primary',
                                        disabled: isCanceled,
                                        icon: <CloseCircleOutlined />,
                                        label: 'Cancelar',
                                        tooltip: 'Cancelar Pedido',
                                        color: 'danger', // Pode ser ignorado se não for necessário
                                        variant: 'solid', // Pode ser ignorado também
                                        onClick: () => {
                                            console.log('Botão clicado!');
                                        }
                                    }
                                }]} contents={<Flex vertical gap={'small'}>
                                    <Card variant="outlined">
                                        <Steps current={isCanceled ? 0 : currentStep} status={isCanceled ? 'error' : undefined} items={stepItems} />
                                    </Card>
                                    {isCanceled ? (null) : orderIsLate ? (<Alert showIcon message="Pedido em atraso" description="Este pedido está em atraso e ultrapassou o tempo estimado para entrega." type="error" />) : (null)}
                                </Flex>} />
                            </Card>
                        </Flex>

                        <Card variant="borderless">
                            <Flex vertical gap={'large'}>

                                <Section icon={<ShopOutlined />} title={'Estabelecimento'} description={'Identifica o local específico onde o pedido foi registrado e está sendo preparado.'} helper={{ tooltip: 'Exibe dados do estabelecimento onde o pedido foi solicitado.' }} contents={
                                    <Card size="small">
                                        <Flex vertical gap={'large'} flex={1}>
                                            <Descriptions size="small" layout="vertical" items={establishmentDetails} />
                                        </Flex>
                                    </Card>
                                } />

                                <Section icon={<UserOutlined />} title={'Cliente'} description={'Indica a pessoa ou entidade que receberá o pedido no destino final.'} helper={{ tooltip: 'Exibe dados do cliente que solicitou o pedido.' }} contents={
                                    <Card size="small">
                                        <Flex vertical gap={'large'}>
                                            <Descriptions size="small" layout="vertical" items={customerDetails} />
                                        </Flex>
                                    </Card>
                                } />

                                <Section icon={<SnippetsOutlined />} title={'Resumo do Pedido'} description={'Apresenta a relação detalhada dos itens selecionados e incluídos no pedido.'} helper={{ tooltip: 'Exibe dados do pedido solicitado.' }} contents={
                                    <Card size="small">
                                        <Flex vertical gap={'large'}>
                                            <List dataSource={order.items} renderItem={(item) => (
                                                <List.Item>
                                                    <Flex gap={'middle'} align="center" flex={1}>
                                                        <Paragraph ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0, flex: 1 }}>{`${item.quantity}x - ${item.title}`}</Paragraph>
                                                        <Flex align="center" justify="space-between" gap={'small'}>
                                                            <Paragraph ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{`R$ ${item.price}`}</Paragraph>
                                                        </Flex>
                                                    </Flex>
                                                </List.Item>
                                            )} />
                                            <Divider style={{ margin: 0 }} />
                                            <Flex align="center" justify="space-between" gap={'large'}>
                                                <Statistic prefix={<BarsOutlined />} title={'Items'} value={order?.items.length} />
                                                <Flex align="center" justify="space-between" gap={'large'}>
                                                    <Statistic title={'Taxa de Entrega'} prefix={'R$'} decimalSeparator="," value={order?.deliveryTax ? order?.deliveryTax : 0.00} precision={2} />
                                                    <Statistic title={'Total'} prefix={'R$'} decimalSeparator="," value={order.total} precision={2} />
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                } />

                            </Flex>

                        </Card>

                    </Flex>) : (
                    <Flex vertical >
                        <Result
                            status={'404'}
                            title={'Nenhum pedido encontrado'}
                            subTitle={`Nenhum pedido com id ${id} encontrado. Verifique se o pedido existe ou aguarde novos pedidos serem registrados.`}
                            extra={<Button type="primary" icon={<AppstoreFilled />} href="/orders">Central de Pedidos</Button>} />
                    </Flex>))
                }

            </Flex>

        </Layout>
    )
}
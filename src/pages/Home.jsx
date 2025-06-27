import { AlertFilled, AppstoreFilled, AuditOutlined, ClockCircleFilled, ClockCircleOutlined, CloseOutlined, DashboardOutlined, DashOutlined, DatabaseFilled, DollarCircleFilled, DollarOutlined, ExclamationCircleFilled, FastForwardOutlined, GoldFilled, HourglassFilled, LikeOutlined, MenuOutlined, MoneyCollectFilled, MoneyCollectOutlined, MoreOutlined, PercentageOutlined, PlayCircleFilled, PlusOutlined, ProductFilled, QuestionCircleFilled, RightOutlined, ScanOutlined, StarFilled, StockOutlined, SyncOutlined, UserAddOutlined, WarningFilled } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Col, Collapse, Flex, Grid, Layout, List, Row, Statistic } from "antd";
import Title from "antd/es/typography/Title";
import Section from "../components/layout/Section";
import Paragraph from "antd/es/typography/Paragraph";
import SellerCard from "../components/SellerCard";

const { useBreakpoint } = Grid

export default function Home() {

    const screens = useBreakpoint()

    const quickActions = [
        { icon: <PlusOutlined />, name: 'Novo Estabelecimento', description: 'Crie e configure um novo estabelecimento em poucos passos.' },
        { icon: <ScanOutlined />, name: 'Cadastrar Produtos', description: 'Adicione novos produtos ao seu catálogo para venda ou estoque.' },
        { icon: <StockOutlined />, name: 'Gerenciar Financeiro', description: 'Controle suas finanças e acompanhe o fluxo de caixa de seus estabelecimentos.' },
        { icon: <AuditOutlined />, name: 'Relatórios', description: 'Visualize o desempenho do seus negócios com relatórios detalhados.' }]


    const ordersAndCustomersStatistics = [
        { name: 'Pedidos Geral Hoje', prefix: <MenuOutlined />, value: 1277 },
        { name: 'Novos Clientes Hoje', prefix: <UserAddOutlined />, value: 56 },
        { name: 'Clientes Ativos no Mês', value: 876 },
    ]

    const financialStatistics = [
        { name: 'Total de Vendas Hoje', prefix: <DollarOutlined />, value: 18945 },
        { name: 'Ticket Médio do Dia', value: 150 },
        { name: 'Receita Mensal Acumulada', value: 578000 },
        { name: 'Despesas Mensais', value: 320000 },
        { name: 'Lucro Bruto do Mês', value: 258000 },
    ]

    const performanceStatistics = [
        { name: 'Avaliações Recebidas Hoje', prefix: <LikeOutlined />, value: 34 },
        { name: 'Taxa de Rejeição de Pedidos', value: '3%' },
        { name: 'Tempo Médio de Entrega', prefix: <ClockCircleOutlined />, value: '28 Minutos' },
    ]

    const inventoryStatistics = [
        { name: 'Produtos em Falta', prefix: <AlertFilled style={{ color: 'tomato' }} />, value: 12 },
        { name: 'Produtos em Estoque', prefix: <DatabaseFilled style={{ color: 'green' }} />, value: 340 },
        { name: 'Produtos em Excesso', prefix: <ExclamationCircleFilled style={{ color: 'orange' }} />, value: 8 },
        { name: 'Produtos com Baixa Rotatividade', prefix: <HourglassFilled style={{ color: 'gray' }} />, value: 20 },
        { name: 'Produtos em Reposição', prefix: <SyncOutlined style={{ color: 'blue' }} spin />, value: 30 },
        { name: 'Categorias de Produtos', prefix: <AppstoreFilled style={{ color: 'purple' }} />, value: 15 },
        { name: 'Valor Total em Estoque', prefix: <DollarCircleFilled style={{ color: 'gold' }} />, value: 125000 },
        { name: 'Produtos com Desconto', prefix: <PercentageOutlined style={{ color: 'cyan' }} />, value: 50 },
        { name: 'Produtos Expirados', prefix: <WarningFilled style={{ color: 'darkred' }} />, value: 5 },
    ];

    const helpCenter = {
        backdrop: 'https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        icon: <QuestionCircleFilled />,
        title: 'Ajuda',
        description: 'Encontre orientações e soluções para usar o sistema de forma eficiente. Explore tutoriais, guias e respostas para as dúvidas mais comuns.',
        action: {
            label: 'Saiba Mais'
        }
    }


    const dashboardItems = [
        {
            key: 'order-and-customers-statistics',
            label: 'Estatísticas Gerais',
            children: <List
                grid={{ gutter: [0, 16], column: screens.xs ? 1 : 3 }}
                dataSource={ordersAndCustomersStatistics}
                renderItem={(statistic) => (
                    <Statistic prefix={statistic?.prefix} title={statistic.name} value={statistic.value} />
                )} />
        }, {
            key: 'financial-statistics',
            label: 'Financeiro',
            children: <List
                grid={{ gutter: [0, 16], column: screens.xs ? 1 : 3 }}
                dataSource={financialStatistics}
                renderItem={(statistic) => (
                    <Statistic prefix={statistic?.prefix} title={statistic.name} value={statistic.value} />
                )} />
        }, {
            key: 'performance-statistics',
            label: 'Performance',
            children: <List
                grid={{ gutter: [0, 16], column: screens.xs ? 1 : 3 }}
                dataSource={performanceStatistics}
                renderItem={(statistic) => (
                    <Statistic prefix={statistic?.prefix} title={statistic.name} value={statistic.value} />
                )} />
        }, {
            key: 'inventory-statistics',
            label: <Flex gap={'small'}><Paragraph>Estoque</Paragraph><Badge count={inventoryStatistics.length} /></Flex>,
            children: <List
                pagination={false}
                grid={{ gutter: [0, 16], column: 1 }}
                dataSource={inventoryStatistics}
                renderItem={(statistic) => (
                    <Flex align="center" gap={'middle'}>
                        <Flex flex={1}>
                            <Statistic prefix={statistic?.prefix} title={statistic.name} value={statistic.value} />
                        </Flex>
                        <Button type="text" size="middle" ghost icon={<RightOutlined />} iconPosition="end" danger>Verificar</Button>
                    </Flex>
                )} />
        }
    ]

    return (
        <Layout>
            <Flex gap={'middle'} align="center">
                <Flex gap={'small'} align="center" flex={1}>
                    <Title level={3} style={{ margin: 0 }}>Início</Title>
                </Flex>
            </Flex>

            <Flex vertical gap={'large'}>


                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                        <Title level={2} style={{ margin: 0 }}>Olá, Eduardo Mendes</Title>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                        <Row gutter={[16, 16]}>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                <Statistic title='Total do Caixa Geral' value={72456} precision={2} />
                                <Button style={{ marginTop: 16 }} type="primary" icon={<DollarCircleFilled />}>Ver Financeiro</Button>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                <Statistic title={`Total de Pedidos Geral: Hoje`} value={156} />
                                <Button style={{ marginTop: 16 }} type="primary" icon={<MenuOutlined />}>Ver Pedidos</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                        <Flex vertical gap={'large'}>

                            <Card variant="borderless">

                                <Section icon={<PlayCircleFilled />} title={'Ações Rápidas'} description={'Simplifique suas operações com acessos rápidos às principais funcionalidades.'} helper={{ tooltip: 'Acelere seu trabalho com atalhos para as ações mais importantes.' }} contents={
                                    <List dataSource={quickActions} renderItem={(quickAction) => (
                                        <List.Item>
                                            <Flex style={{ width: '100%' }} align="center" justify="space-between" gap={'middle'}>
                                                <Avatar size={'large'} shape={'square'} icon={quickAction.icon} />
                                                <Flex vertical flex={1}>
                                                    <Paragraph ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0, fontWeight: 'bolder' }}>{quickAction.name}</Paragraph>
                                                    <Paragraph type="secondary" ellipsis={{ rows: 3, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{quickAction.description}</Paragraph>
                                                </Flex>
                                                <Button size="small" type="text" icon={<RightOutlined />} shape="circle" />
                                            </Flex>
                                        </List.Item>
                                    )} />
                                } />
                            </Card>

                            <SellerCard backdrop={helpCenter.backdrop} icon={helpCenter.icon} title={helpCenter.title} description={helpCenter.description} action={helpCenter.action} />

                        </Flex>

                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                        <Card variant="borderless">
                            <Flex vertical gap={'large'}>
                                <Section title={`Resumo ${new Date().toLocaleDateString('pt-BR', {
                                    weekday: 'long',
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                })}`} description={'Simplifique suas operações com acessos rápidos às principais funcionalidades.'} helper={{ tooltip: 'Acelere seu trabalho com atalhos para as ações mais importantes.' }} contents={
                                    <Card styles={{ body: { padding: 0 } }} variant="bordered">
                                        <Collapse defaultActiveKey={['general-statistics']} expandIconPosition="end" ghost items={dashboardItems} />
                                    </Card>
                                } />
                                <Flex vertical align="end" gap={'small'}>
                                    <Button type="primary" ghost icon={<DashboardOutlined />}>Ir para Dashboard</Button>
                                </Flex>
                            </Flex>
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                        <Card variant="borderless">
                            <Flex vertical gap={'large'}>
                                <Section title={'Estabelecimentos que precisam de atenção'} description={''} helper={{ tooltip: '' }} contents={null} />
                            </Flex>
                        </Card>
                    </Col>

                </Row>

            </Flex>
        </Layout >
    )
}
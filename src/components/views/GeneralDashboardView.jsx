import { Card, Col, Flex, Row, Select, Table, theme } from "antd";
import Section from "../layout/Section";
import { Area, Bar, Column, Funnel, Heatmap, Line, Pie } from "@ant-design/charts";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import inProgressOrders from "../../local/in-progress-orders.json"
import lastOrders from "../../local/last-orders.json"
import { orderCentralTableColumnDefault } from "../../configuration/orderCentralTableColumnDefault";
import { useEffect, useState } from "react";

export default function GeneralDashboardView(props) {

    const [period, setPeriod] = useState('today');

    const metricsData = {
        ordersOverTime: {
            today: [
                { date: '10:00', orders: 10 },
                { date: '12:00', orders: 30 },
                { date: '14:00', orders: 18 },
                { date: '18:00', orders: 42 },
                { date: '20:00', orders: 55 }
            ],
            yesterday: [
                { date: '10:00', orders: 12 },
                { date: '12:00', orders: 25 },
                { date: '14:00', orders: 22 },
                { date: '18:00', orders: 48 },
                { date: '20:00', orders: 50 }
            ],
            lastThirtyDays: [
                { date: '01/06', orders: 120 },
                { date: '02/06', orders: 98 },
                { date: '03/06', orders: 130 },
                { date: '04/06', orders: 150 },
                { date: '05/06', orders: 80 }
            ],
            lastSixtyDays: [
                { date: '01/05', orders: 100 },
                { date: '02/05', orders: 105 },
                { date: '03/05', orders: 110 },
                { date: '04/05', orders: 120 },
                { date: '05/05', orders: 130 }
            ]
        },

        salesFrequency: {
            today: [
                { date: '10:00', frequency: 0.15 },
                { date: '12:00', frequency: 0.3 },
                { date: '14:00', frequency: 0.2 },
                { date: '18:00', frequency: 0.4 },
                { date: '20:00', frequency: 0.55 }
            ],
            yesterday: [
                { date: '10:00', frequency: 0.12 },
                { date: '12:00', frequency: 0.25 },
                { date: '14:00', frequency: 0.22 },
                { date: '18:00', frequency: 0.48 },
                { date: '20:00', frequency: 0.5 }
            ],
            lastThirtyDays: [
                { date: '01/06', frequency: 0.4 },
                { date: '02/06', frequency: 0.38 },
                { date: '03/06', frequency: 0.45 },
                { date: '04/06', frequency: 0.5 },
                { date: '05/06', frequency: 0.35 }
            ],
            lastSixtyDays: [
                { date: '01/05', frequency: 0.35 },
                { date: '02/05', frequency: 0.36 },
                { date: '03/05', frequency: 0.37 },
                { date: '04/05', frequency: 0.4 },
                { date: '05/05', frequency: 0.42 }
            ]
        },

        productCategoryComparison: {
            today: [
                { category: 'Bebidas', orders: 25 },
                { category: 'Comidas', orders: 45 },
                { category: 'Sobremesas', orders: 15 },
                { category: 'Outros', orders: 5 }
            ],
            yesterday: [
                { category: 'Bebidas', orders: 20 },
                { category: 'Comidas', orders: 40 },
                { category: 'Sobremesas', orders: 12 },
                { category: 'Outros', orders: 7 }
            ],
            lastThirtyDays: [
                { category: 'Bebidas', orders: 700 },
                { category: 'Comidas', orders: 1300 },
                { category: 'Sobremesas', orders: 400 },
                { category: 'Outros', orders: 150 }
            ],
            lastSixtyDays: [
                { category: 'Bebidas', orders: 1400 },
                { category: 'Comidas', orders: 2600 },
                { category: 'Sobremesas', orders: 800 },
                { category: 'Outros', orders: 300 }
            ]
        },

        salesChannelsParticipation: {
            today: [
                { channel: 'App', value: 45 },
                { channel: 'Balcão', value: 30 },
                { channel: 'iFood', value: 25 }
            ],
            yesterday: [
                { channel: 'App', value: 40 },
                { channel: 'Balcão', value: 35 },
                { channel: 'iFood', value: 25 }
            ],
            lastThirtyDays: [
                { channel: 'App', value: 1400 },
                { channel: 'Balcão', value: 900 },
                { channel: 'iFood', value: 700 }
            ],
            lastSixtyDays: [
                { channel: 'App', value: 2800 },
                { channel: 'Balcão', value: 1800 },
                { channel: 'iFood', value: 1400 }
            ]
        },

        conversionRate: {
            today: [
                { step: 'Visitas', value: 500 },
                { step: 'Pedidos', value: 120 },
                { step: 'Finalizados', value: 110 }
            ],
            yesterday: [
                { step: 'Visitas', value: 480 },
                { step: 'Pedidos', value: 115 },
                { step: 'Finalizados', value: 105 }
            ],
            lastThirtyDays: [
                { step: 'Visitas', value: 15000 },
                { step: 'Pedidos', value: 4200 },
                { step: 'Finalizados', value: 3900 }
            ],
            lastSixtyDays: [
                { step: 'Visitas', value: 30000 },
                { step: 'Pedidos', value: 8500 },
                { step: 'Finalizados', value: 8000 }
            ]
        },

        orderTypeDistribution: {
            today: [
                { type: 'Para Viagem', value: 35 },
                { type: 'Mesa', value: 50 },
                { type: 'Delivery', value: 15 }
            ],
            yesterday: [
                { type: 'Para Viagem', value: 30 },
                { type: 'Mesa', value: 55 },
                { type: 'Delivery', value: 15 }
            ],
            lastThirtyDays: [
                { type: 'Para Viagem', value: 1100 },
                { type: 'Mesa', value: 1600 },
                { type: 'Delivery', value: 500 }
            ],
            lastSixtyDays: [
                { type: 'Para Viagem', value: 2200 },
                { type: 'Mesa', value: 3200 },
                { type: 'Delivery', value: 1000 }
            ]
        },

        avgPrepTimeByCategory: {
            today: [
                { category: 'Bebidas', time: 5 },
                { category: 'Comidas', time: 20 },
                { category: 'Sobremesas', time: 12 }
            ],
            yesterday: [
                { category: 'Bebidas', time: 6 },
                { category: 'Comidas', time: 18 },
                { category: 'Sobremesas', time: 13 }
            ],
            lastThirtyDays: [
                { category: 'Bebidas', time: 5 },
                { category: 'Comidas', time: 22 },
                { category: 'Sobremesas', time: 11 }
            ],
            lastSixtyDays: [
                { category: 'Bebidas', time: 5 },
                { category: 'Comidas', time: 21 },
                { category: 'Sobremesas', time: 12 }
            ]
        },

        weeklySalesComparison: {
            today: [
                { item: 'Hamburger', date: '2025-01-01', orders: 25 },
                { item: 'Hamburger', date: '2025-02-01', orders: 12 },
                { item: 'Pizza', date: '2025-03-01', orders: 48 },
                { item: 'Pizza', date: '2025-04-01', orders: 36 },
                { item: 'Pizza', date: '2025-05-01', orders: 48 },
                { item: 'Pizza', date: '2025-06-01', orders: 21 },
                { item: 'Pizza', date: '2025-07-01', orders: 22 },
                { item: 'Pizza', date: '2025-08-01', orders: 32 },
                { item: 'Pizza', date: '2025-09-01', orders: 24 },
                { item: 'Calzone', date: '2025-10-01', orders: 4 },
                { item: 'Calzone', date: '2025-11-01', orders: 16 },
                { item: 'Calzone', date: '2025-12-01', orders: 14 }
            ],
            yesterday: [
                { item: 'Pizza', date: '2025-01-01', orders: 2 },
                { item: 'Pizza', date: '2025-02-01', orders: 2 },
                { item: 'Pizza', date: '2025-03-01', orders: 2 },
                { item: 'Pizza', date: '2025-04-01', orders: 2 },
                { item: 'Pizza', date: '2025-05-01', orders: 2 },
                { item: 'Pizza', date: '2025-06-01', orders: 2 },
                { item: 'Pizza', date: '2025-07-01', orders: 2 },
                { item: 'Pizza', date: '2025-08-01', orders: 2 },
                { item: 'Pizza', date: '2025-09-01', orders: 2 },
                { item: 'Hot-Dog', date: '2025-10-01', orders: 2 },
                { item: 'Hot-Dog', date: '2025-11-01', orders: 2 },
                { item: 'Hot-Dog', date: '2025-12-01', orders: 2 }
            ],
            lastThirtyDays: [
                { item: 'Esfiha', date: '2025-01-01', orders: 2 },
                { item: 'Esfiha', date: '2025-02-01', orders: 2 },
                { item: 'Pizza', date: '2025-03-01', orders: 2 },
                { item: 'Pizza', date: '2025-04-01', orders: 2 },
                { item: 'Pizza', date: '2025-05-01', orders: 2 },
                { item: 'Pizza', date: '2025-06-01', orders: 2 },
                { item: 'Pizza', date: '2025-07-01', orders: 2 },
                { item: 'Pizza', date: '2025-08-01', orders: 2 },
                { item: 'Pizza', date: '2025-09-01', orders: 2 },
                { item: 'Calzone', date: '2025-10-01', orders: 2 },
                { item: 'Calzone', date: '2025-11-01', orders: 2 },
                { item: 'Calzone', date: '2025-12-01', orders: 2 }
            ],
            lastSixtyDays: [
                { item: 'Esfiha', date: '2025-01-01', orders: 20 },
                { item: 'Esfiha', date: '2025-02-01', orders: 24 },
                { item: 'Sanduíche', date: '2025-03-01', orders: 23 },
                { item: 'Sanduíche', date: '2025-04-01', orders: 25 },
                { item: 'Sanduíche', date: '2025-05-01', orders: 21 },
                { item: 'Sanduíche', date: '2025-06-01', orders: 22 },
                { item: 'Sanduíche', date: '2025-07-01', orders: 24 },
                { item: 'Sanduíche', date: '2025-08-01', orders: 28 },
                { item: 'Sanduíche', date: '2025-09-01', orders: 29 },
                { item: 'Calzone', date: '2025-10-01', orders: 27 },
                { item: 'Calzone', date: '2025-11-01', orders: 25 },
                { item: 'Calzone', date: '2025-12-01', orders: 25 }
            ]
        },

        cancelRefundTrends: {
            today: [
                { date: '10:00', count: 2 },
                { date: '12:00', count: 1 },
                { date: '14:00', count: 3 },
                { date: '18:00', count: 4 }
            ],
            yesterday: [
                { date: '10:00', count: 3 },
                { date: '12:00', count: 2 },
                { date: '14:00', count: 2 },
                { date: '18:00', count: 5 }
            ],
            lastThirtyDays: [
                { date: '01/06', count: 20 },
                { date: '02/06', count: 18 },
                { date: '03/06', count: 25 }
            ],
            lastSixtyDays: [
                { date: '01/05', count: 40 },
                { date: '02/05', count: 38 },
                { date: '03/05', count: 45 }
            ]
        },

        establishmentsComparison: {
            today: [
                { establishment: 'Restaurante A', sales: 120 },
                { establishment: 'Mercado B', sales: 150 },
                { establishment: 'Café C', sales: 90 }
            ],
            yesterday: [
                { establishment: 'Restaurante A', sales: 110 },
                { establishment: 'Mercado B', sales: 140 },
                { establishment: 'Café C', sales: 85 }
            ],
            lastThirtyDays: [
                { establishment: 'Restaurante A', sales: 700 },
                { establishment: 'Mercado B', sales: 850 },
                { establishment: 'Café C', sales: 600 }
            ],
            lastSixtyDays: [
                { establishment: 'Restaurante A', sales: 1400 },
                { establishment: 'Mercado B', sales: 1600 },
                { establishment: 'Café C', sales: 1200 }
            ]
        },

        peakTimesSeasonality: {
            today: [
                { hour: '10:00', orders: 12, cancels: 12 },
                { hour: '12:00', orders: 30, cancels: 14 },
                { hour: '14:00', orders: 20, cancels: 16 },
                { hour: '18:00', orders: 50, cancels: 18 },
                { hour: '20:00', orders: 55, cancels: 20 }
            ],
            yesterday: [
                { hour: '10:00', orders: 15, cancels: 1 },
                { hour: '12:00', orders: 25, cancels: 2 },
                { hour: '14:00', orders: 22, cancels: 2 },
                { hour: '18:00', orders: 48, cancels: 4 },
                { hour: '20:00', orders: 50, cancels: 2 }
            ],
            lastThirtyDays: [
                { date: '01/06', peakOrders: 120, cancels: 12 },
                { date: '02/06', peakOrders: 98, cancels: 48 },
                { date: '03/06', peakOrders: 130, cancels: 32 },
                { date: '04/06', peakOrders: 150, cancels: 12 },
                { date: '05/06', peakOrders: 80, cancels: 24 }
            ],
            lastSixtyDays: [
                { date: '01/05', peakOrders: 100, cancels: 52 },
                { date: '02/05', peakOrders: 105, cancels: 12 },
                { date: '03/05', peakOrders: 110, cancels: 45 },
                { date: '04/05', peakOrders: 120, cancels: 9 },
                { date: '05/05', peakOrders: 130, cancels: 2 }
            ]
        }
    };

    const ordersOverTime = metricsData.ordersOverTime[period];
    const salesFrequency = metricsData.salesFrequency[period];
    const productCategoryComparison = metricsData.productCategoryComparison[period];
    const salesChannelsParticipation = metricsData.salesChannelsParticipation[period];
    const conversionRate = metricsData.conversionRate[period];
    const orderTypeDistribution = metricsData.orderTypeDistribution[period];
    const avgPrepTimeByCategory = metricsData.avgPrepTimeByCategory[period];
    const weeklySalesComparison = metricsData.weeklySalesComparison[period];
    const cancelRefundTrends = metricsData.cancelRefundTrends[period];
    const establishmentsComparison = metricsData.establishmentsComparison[period];
    const peakTimesSeasonality = metricsData.peakTimesSeasonality[period];

    const lineChartConfig = {
        theme: { type: props.theme },
        point: {
            shapeField: 'circle',
            sizeField: 4,
        },
        interaction: {
            tooltip: {
                marker: false,
            },
        }, style: {
            lineWidth: 2,
        },
    };

    const columnChartConfig = {
        theme: { type: props.theme },
        sort: { reverse: true }
    }

    const basicPieChartConfig = {
        theme: { type: props.theme },
        label: {
            text: 'value',
            style: {
                fontWeight: 'bold'
            }
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            }
        }
    }

    const funnelChartConfig = {
        theme: { type: props.theme },
    }

    const smoothLineChartConfig = {
        theme: { type: props.theme },
        shapeField: 'smooth',
        scale: {
            y: {
                domainMin: 0
            }
        },
        interaction: {
            tooltip: {
                marker: false
            }
        },
        style: {
            lineWidth: 2,
        }
    }

    const barChartConfig = {
        theme: { type: props.theme },
        label: {
            text: (d) => `${(d.frequency * 100).toFixed(1)} %`,
            textBaseline: 'bottom',
        },
        axis: {
            y: {
                labelFormatter: '.0%'
            },
        },
        style: {
            radiusTopLeft: 10,
            radiusTopRight: 10,
        }
    };

    const handleChange = (value) => {
        setPeriod(value)
    }

    return (
        <Flex vertical gap={'large'}>

            <Row gutter={[16, 16]}>

                <Col span={24}>
                    <Flex align="start" flex={1} gap={'middle'} style={{ width: '100%' }}>
                        <Flex vertical flex={1}>
                            <Title level={2} style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Resumo Geral</Title>
                            <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Todos os Estabelecimentos</Paragraph>
                        </Flex>
                        <Select style={{ minWidth: 128 }} size="large" defaultValue={'today'} onChange={handleChange} options={[
                            { value: 'today', label: 'Hoje' },
                            { value: 'yesterday', label: 'Ontem' },
                            { value: 'lastThirtyDays', label: 'Últimos 30 dias' },
                            { value: 'lastSixtyDays', label: 'Últimos 60 dias' }]} />
                    </Flex>
                </Col>

                <Card variant="outlined" size="small">

                    <Row gutter={[16, 16]} style={{ overflowX: 'hidden', overflowY: 'auto', height: '75vh' }}>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Pedidos ao longo do tempo"
                                description="Visualize a evolução da demanda ao longo do dia, semana ou mês e identifique padrões de consumo."
                                helper={{ tooltip: 'Ajuda a planejar horários de produção e turnos com base no fluxo de pedidos.' }}
                                contents={<Line data={ordersOverTime} xField="date" yField="orders" {...lineChartConfig} />}
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Frequência de Vendas por Período"
                                description="Compreenda a constância das vendas e descubra os períodos de maior e menor atividade."
                                helper={{ tooltip: 'Avalia a consistência das vendas em diferentes datas ou turnos.' }}
                                contents={<Column data={salesFrequency} colorField="frequency" xField="date" yField="frequency" {...barChartConfig} />}
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Categorias de Produto mais Vendidas"
                                description="Compare o desempenho das categorias para entender quais segmentos impulsionam o faturamento."
                                helper={{ tooltip: 'Permite foco em categorias estratégicas para promoções ou reposição de estoque.' }}
                                contents={<Bar data={productCategoryComparison} xField="category" colorField="category" yField="orders" {...columnChartConfig} />}
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Canais de Venda"
                                description="Analise a participação de cada canal (app, balcão, delivery) nas vendas totais."
                                helper={{ tooltip: 'Orienta decisões de investimento e ações promocionais por canal.' }}
                                contents={<Pie data={salesChannelsParticipation} colorField="channel" angleField="value" {...basicPieChartConfig} />}
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Taxa de Conversão"
                                description="Veja quantos visitantes realmente concluem um pedido e otimize pontos de atrito."
                                helper={{ tooltip: 'Ajuda a identificar gargalos no funil de vendas e oportunidades de melhoria.' }}
                                contents={<Funnel data={conversionRate} xField="step" yField="value" label={{ text: (d) => `${d.step} \n ${d.value}` }} {...funnelChartConfig} />}
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Tipos de Pedido"
                                description="Verifique a proporção entre pedidos para entrega, retirada ou consumo no local."
                                helper={{ tooltip: 'Facilita decisões logísticas e melhorias no atendimento por modalidade.' }}
                                contents={<Pie data={orderTypeDistribution} colorField="type" angleField="value" {...basicPieChartConfig} />}
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Tempo Médio de Preparo por Categoria"
                                description="Meça o desempenho operacional e identifique gargalos por tipo de produto."
                                helper={{ tooltip: 'Permite identificar categorias que atrasam entregas ou impactam a experiência do cliente.' }}
                                contents={<Bar theme={props.theme} data={avgPrepTimeByCategory} xField="category" yField="time" colorField="category" group />}
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Comparativo de Vendas (Diário/Semanal)"
                                description="Compare o desempenho entre dias e semanas para identificar tendências de crescimento ou queda."
                                helper={{ tooltip: 'Ajuda no planejamento de promoções e avaliação de ações recentes.' }}
                                contents={<Line data={weeklySalesComparison} theme={props.theme} colorField="item" seriesField="item" xField={(d) => new Date(d.date)} yField="orders" />}
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <Section
                                title="Cancelamentos e Reembolsos"
                                description="Acompanhe a evolução dos cancelamentos e reembolsos para detectar problemas recorrentes."
                                helper={{ tooltip: 'Permite identificar causas e horários com maiores taxas de cancelamento.' }}
                                contents={
                                    <Area
                                        data={cancelRefundTrends}
                                        xField="date"
                                        yField="count"
                                        theme={props.theme}
                                        interaction={{ tooltip: { marker: false } }}
                                        point={{ sizeField: 4, style: { stroke: 'orangered', fill: '#fff' } }}
                                        line={{ style: { stroke: 'orangered', lineWidth: 2 } }}
                                        style={{
                                            fill: `linear-gradient(-90deg, ${props.theme === 'light' ? '#fff' : 'transparent'}, orangered 100%)`,
                                        }}
                                    />
                                }
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Comparativo entre Estabelecimentos"
                                description="Compare o desempenho de diferentes unidades ou franquias em relação às vendas."
                                helper={{ tooltip: 'Facilita análises regionais e decisões de investimento ou padronização.' }}
                                contents={<Line theme={props.theme} data={establishmentsComparison} xField="establishment" yField="sales" />}
                            />
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <Section
                                title="Horários de Pico e Sazonalidade"
                                description="Identifique os horários e dias de maior movimento para melhor alocação de recursos."
                                helper={{ tooltip: 'Permite ajustar escalas de equipe, estoque e campanhas para horários estratégicos.' }}
                                contents={<Heatmap theme={props.theme} data={peakTimesSeasonality} xField="hour" yField="orders" colorField="cancels" sizeField={26} />}
                            />
                        </Col>

                    </Row>

                </Card>

            </Row>

            <Section title={'Resumo dos Pedidos'} description={'Acompanhe de forma rápida o status dos pedidos em tempo real, incluindo os que estão em andamento, finalizados e com entrega concluída.'} helper={{ tooltip: 'Visualize o andamento dos pedidos em tempo real, desde a preparação até a entrega final. Ideal para monitorar a operação da cozinha e o fluxo de entregas.' }} contents={<Flex vertical gap={'large'} flex={1}>

                <Section title={'Finalizados'} helper={{ tooltip: 'Pedidos que foram concluídos com sucesso e já estão prontos para entrega ou foram retirados pelo cliente. Aqui você encontra o histórico recente das preparações finalizadas pela cozinha.' }} contents={
                    <Table
                        bordered
                        scroll={{ x: 'max-content' }}
                        rowKey={'id'}
                        pagination={{ pageSize: 8 }}
                        rowSelection={{ type: 'checkbox' }}
                        columns={orderCentralTableColumnDefault}
                        dataSource={lastOrders}
                    />
                } />

                <Section title={'Em Andamento'} helper={{ tooltip: 'Pedidos que estão sendo preparados neste momento. Acompanhe o status de cada item em produção e o tempo estimado para finalização.' }} contents={
                    <Table
                        bordered
                        scroll={{ x: 'max-content' }}
                        rowKey={'id'}
                        pagination={{ pageSize: 8 }}
                        rowSelection={{ type: 'checkbox' }}
                        columns={orderCentralTableColumnDefault}
                        dataSource={inProgressOrders} />
                } />

                <Section title={'Entregas Finalizadas'} helper={{ tooltip: 'Pedidos que já foram entregues ao cliente. Use esta seção para consultar registros de entregas concluídas, incluindo data, horário e itens entregues.' }} contents={
                    <Table
                        bordered
                        scroll={{ x: 'max-content' }}
                        rowKey={'id'}
                        pagination={{ pageSize: 8 }}
                        rowSelection={{ type: 'checkbox' }}
                        columns={orderCentralTableColumnDefault}
                        dataSource={lastOrders} />
                } />

            </Flex>} />

        </Flex>
    )
}
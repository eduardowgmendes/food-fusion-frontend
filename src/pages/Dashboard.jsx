import { Card, Col, Flex, Layout, Row, Segmented, Select, Tooltip } from "antd";
import PageToolbar from "../components/layout/PageToolbar";
import { BarsOutlined, KeyOutlined, ShopOutlined } from "@ant-design/icons";
import establishments from "../local/establishments.json";
import GeneralDashboardView from "../components/views/GeneralDashboardView";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { useState } from "react";
import EstablishmentDashboardView from "../components/views/EstablishmentDashboardView";

export default function Dashboard(props) {

    const [selected, setSelected] = useState(null)

    const theme = props.theme

    const pageToolbar = {
        title: 'Dashboard',
        description: 'Gerencie seus estabelecimentos com total flexibilidade, permitindo personalizar cada local de forma independente. Ajuste informações, horários de funcionamento, cardápios e mais, garantindo que cada estabelecimento tenha uma identidade própria. Facilite o controle e a organização com ferramentas intuitivas para uma administração eficiente.',
        actions: [{
            key: 'export',
            type: 'selectable',
            label: 'Selecionar Estabelecimento',
            tooltip: { title: 'Escolha um estabelecimento para visualizar e analisar métricas de desempenho individualizadas.' },
            icon: <KeyOutlined />,
            onClick: null
        }]
        , settings: []
    }

    const options = establishments.map((establishment) => ({ key: establishment.id, label: establishment.name }))

    const handleChange = (value) => {
        setSelected(value)
    }

    return (
        <Layout>

            <Flex vertical gap={'small'}>

                <Flex vertical gap={'large'}>

                    <PageToolbar title={pageToolbar.title} description={pageToolbar.description} actions={pageToolbar.actions} breadcrumb={[
                        { title: <a href={'/'}>Home</a>, },
                        { title: <a href={window.location.href}>Dashboard</a>, },
                    ]} settings={pageToolbar.settings} />

                    <Flex vertical gap={'large'}>

                        <Row gutter={[16, 16]}>

                            <Col span={24}>

                                <Flex vertical gap={'small'}>

                                    <Flex vertical flex={1}>
                                        <Title level={4} style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Estabelecimento</Title>
                                        <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Escolha um estabelecimento para visualizar e analisar métricas de desempenho individualizadas.</Paragraph>
                                    </Flex>

                                    <Tooltip title={'Escolha um estabelecimento para visualizar e analisar métricas de desempenho individualizadas.'}>

                                        <Select
                                            prefix={<ShopOutlined />}
                                            size="large"
                                            placeholder='Selecionar Estabelecimento'
                                            options={options}
                                            onChange={handleChange} />

                                    </Tooltip>

                                </Flex>

                            </Col>

                        </Row>

                        <Card variant={'outlined'}>

                            {selected !== null ? (<EstablishmentDashboardView establishment={selected} theme={theme} />) : (<GeneralDashboardView theme={theme} />)}

                        </Card>

                    </Flex>

                </Flex>

            </Flex>

        </Layout >
    )
}
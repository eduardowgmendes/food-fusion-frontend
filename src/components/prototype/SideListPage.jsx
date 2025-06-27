import { AppstoreOutlined, BugOutlined, CheckCircleOutlined, CloudServerOutlined, ContainerOutlined, DashboardOutlined, DashOutlined, DatabaseOutlined, DesktopOutlined, DisconnectOutlined, GlobalOutlined, MailOutlined, MobileFilled, MobileOutlined, PhoneOutlined, PieChartOutlined, QqOutlined, SecurityScanOutlined, SettingOutlined, SyncOutlined, UploadOutlined, UsbOutlined, WifiOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Descriptions, Flex, Layout, List, Menu, Progress, Row, Statistic, Timeline } from "antd";
import Search from "antd/es/input/Search";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import RelativeTime from "../../utils/RelativeTime";

export default function SideListPage() {

    const appVersion = '1.0.1'
    const backendAiVersion = '12.16.1'
    const certification = '1.0.9.0.TKEMIXM'
    const integrations = 'Disponíveis'

    const [connectionTestStart, setConnectionTestStart] = useState(false)

    const toggleConnectionTest = () => {
        setConnectionTestStart(!connectionTestStart)
    }

    const items = [
        {
            key: '1', icon: <MobileOutlined />, label: 'Sobre a Aplicação', page: {
                title: 'Sobre a Aplicação', description: '', contents:
                    <Flex vertical gap={'large'} flex={1} >
                        <List dataSource={[
                            { key: '1', label: 'Versão da Aplicação', children: `${appVersion}` },
                            { key: '2', label: 'Versão da API', children: `${backendAiVersion}` },
                            { key: '3', label: 'Integrações', children: `${integrations}` },
                            { key: '4', label: 'Versão da API', children: `${backendAiVersion}` },
                            { key: '5', label: 'Versão da API', children: `${backendAiVersion}` },
                            { key: '6', label: 'Certificação', children: `${certification}` },
                        ]} renderItem={(item) => (
                            <List.Item key={item.key}>
                                <Statistic key={item.key} title={item.label} value={item.children} />
                            </List.Item>
                        )} />
                    </Flex>
            }
        },
        {
            key: '2', icon: <UploadOutlined />, label: 'Central de Atualizações', page: {
                title: 'Central de Atualizações', description: '', contents:
                    <Flex vertical gap={'large'} flex={1}>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Card variant="borderless">
                                    <Flex align="center" gap={'middle'} flex={1}>
                                        <Avatar style={{ background: 'green' }} shape="square" size={'large'} icon={<SecurityScanOutlined />} />
                                        <Flex vertical flex={1}>
                                            <Title level={4} style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Você está atualizado!</Title>
                                            <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Buscar atualizações mais recentes</Paragraph>
                                        </Flex>
                                    </Flex>
                                </Card>
                            </Col>
                        </Row>
                    </Flex>
            }
        },
        { key: '3', icon: <SecurityScanOutlined />, label: 'Status de Segurança', page: { title: 'Status de Segurança', description: '' } },
        {
            key: 'test-settings-group',
            label: 'Testes',
            icon: <BugOutlined />,
            children: [
                {
                    key: '5', icon: <DashboardOutlined />, label: 'Conexão & Velocidade', page: {
                        title: 'Conexão & Velocidade', descript1ion: '', contents:
                            <Flex vertical gap={'large'} flex={1}>
                                <Flex vertical>
                                    <Button type="default" icon={<SyncOutlined />} onClick={toggleConnectionTest}>Iniciar Teste</Button>
                                </Flex>
                                <Card size="small" variant="borderless">
                                    {connectionTestStart ? (<Timeline
                                        pending={'Testando...'}
                                        items={[
                                            {
                                                dot: <DesktopOutlined />,
                                                children: 'Conexão Local'
                                            },
                                            {
                                                dot: <DisconnectOutlined />,
                                                children: 'Infraestrutura Local'
                                            },
                                            {
                                                dot: <GlobalOutlined />,
                                                children: 'Conexão com a Internet'
                                            }]} />) : (<Flex vertical gap={'large'}>
                                                Conexão estável
                                            </Flex>)}
                                </Card>
                            </Flex>
                    }
                },
                { key: '6', icon: <WifiOutlined />, label: 'Bluetooth', page: { title: 'Bluetooth', description: '' } },
                { key: '7', icon: <UsbOutlined />, label: 'Dispositivos', page: { title: 'Dispositivos', description: '' } },
                { key: '8', label: 'Configurações Adicionais', page: { title: 'Configurações Adicionais', description: '' } },
            ],
        },
        {
            key: 'bluetooth-settings-group',
            label: 'Serviços Externos',
            icon: <DatabaseOutlined />,
            children: [
                {
                    key: '9', label: 'Status APIs', page: {
                        title: 'Status APIs', description: '', contents:
                            <Flex vertical gap={'large'} flex={1}>
                                <List dataSource={[{
                                    key: '1',
                                    icon: <CheckCircleOutlined style={{ color: "springgreen" }} />,
                                    label: 'Food Fusion Api',
                                    value: 'OK'
                                }, {
                                    key: '2',
                                    icon: <CheckCircleOutlined style={{ color: "springgreen" }} />,
                                    label: 'Food Fusion Location Services',
                                    value: 'OK'
                                }, {
                                    key: '3',
                                    icon: <CheckCircleOutlined style={{ color: "springgreen" }} />,
                                    label: 'Food Fusion WhoIAM Services',
                                    value: 'OK'
                                }, {
                                    key: '4',
                                    icon: <CheckCircleOutlined style={{ color: "springgreen" }} />,
                                    label: 'Food Fusion AI Insights Services',
                                    value: 'OK'
                                }, {
                                    key: '5',
                                    icon: <CheckCircleOutlined style={{ color: "springgreen" }} />,
                                    label: 'Food Fusion Auxiliary & Utilities',
                                    value: 'OK'
                                }]} renderItem={(item) => (
                                    <List.Item>
                                        <Statistic size={'small'} prefix={item.icon} key={item.key} title={item.label} value={item.value} />
                                    </List.Item>
                                )} />
                            </Flex>
                    }
                },
                {
                    key: '10', label: 'Status Serviços Third-Party', page: {
                        title: 'Status Serviços Third-Party', description: '', contents:
                            <Flex vertical gap={'large'} flex={1}>
                                <List dataSource={[{
                                    key: '1',
                                    icon: <CheckCircleOutlined style={{ color: "springgreen" }} />,
                                    label: 'iFood Merchant Api',
                                    value: 'OK'
                                }, {
                                    key: '2',
                                    icon: <CheckCircleOutlined style={{ color: "springgreen" }} />,
                                    label: '99Taxis',
                                    value: 'OK'
                                }, {
                                    key: '3',
                                    icon: <CheckCircleOutlined style={{ color: "springgreen" }} />,
                                    label: 'Uber Services',
                                    value: 'OK'
                                }]} renderItem={(item) => (
                                    <List.Item>
                                        <Statistic size={'small'} prefix={item.icon} key={item.key} title={item.label} value={item.value} />
                                    </List.Item>
                                )} />
                            </Flex>
                    }
                },
                {
                    key: 'devices-avalable',
                    label: 'Servidores Encontrados',
                    children: [
                        {
                            key: '11',
                            icon: <MobileOutlined />,
                            label: 'EP-S801',
                            page: {
                                title: 'EP-S801',
                                description: 'Servidor Web Externo',
                                contents:
                                    <Flex vertical gap={'large'} flex={1}>
                                        <Card variant="borderless">

                                            <Flex vertical gap={'large'}>

                                                <Flex align="center" gap={'middle'} flex={1}>

                                                    <Avatar size={'large'} icon={<CloudServerOutlined />} />

                                                    <Flex vertical flex={1}>
                                                        <Title level={4} style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>EP-S801</Title>
                                                        <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Ext3/ext4 Filesystem</Paragraph>
                                                    </Flex>

                                                </Flex>

                                                <Flex vertical gap={'small'}>

                                                    <Progress percent={30} status="active" />

                                                    <Flex align="center" justify="space-between" gap={'large'} flex={1}>
                                                        <Paragraph type="secondary" style={{ margin: 0, textAlign: 'center', flex: 1 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>984.4 GB total</Paragraph>
                                                        <Paragraph type="warning" style={{ margin: 0, textAlign: 'center', flex: 1 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>502.3 GB em uso</Paragraph>
                                                        <Paragraph style={{ margin: 0, textAlign: 'center', flex: 1 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>426.0 GB livres</Paragraph>
                                                    </Flex>

                                                </Flex>

                                                <Card variant="outlined" size="small">
                                                    <List dataSource={[{ key: '1', label: 'Modificado em', value: RelativeTime.format(new Date()) }, { key: '2', label: 'Criado em', value: RelativeTime.format(new Date()) }]} renderItem={(item) => (
                                                        <List.Item>
                                                            <Statistic key={item.key} title={item.label} value={item.value} />
                                                        </List.Item>
                                                    )} />
                                                </Card>

                                                <Card variant="outlined" size="small">
                                                    <List dataSource={[{ key: '1', label: 'Permissões', value: 'Criar e Deletar Arquivos' }]} renderItem={(item) => (
                                                        <List.Item>
                                                            <Statistic key={item.key} title={item.label} value={item.value} />
                                                        </List.Item>
                                                    )} />
                                                </Card>

                                            </Flex>

                                        </Card>
                                    </Flex>
                            }
                        }, {
                            key: '12',
                            icon: <MobileOutlined />,
                            label: 'KASM-T56.0XXL',
                            page: {
                                title: 'KASM-T56.0XXL', description: 'Servidor Web Externo', contents:
                                    <Flex vertical gap={'large'} flex={1}>
                                        <Card variant="borderless">

                                            <Flex vertical gap={'large'}>

                                                <Flex align="center" gap={'middle'} flex={1}>

                                                    <Avatar size={'large'} icon={<CloudServerOutlined />} />

                                                    <Flex vertical flex={1}>
                                                        <Title level={4} style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>KASM-T56.0XXL</Title>
                                                        <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Ext3/ext4 Filesystem</Paragraph>
                                                    </Flex>

                                                </Flex>

                                                <Flex vertical gap={'small'}>

                                                    <Progress percent={72} status="exception" />

                                                    <Flex align="center" justify="space-between" gap={'large'} flex={1}>
                                                        <Paragraph type="secondary" style={{ margin: 0, textAlign: 'center', flex: 1 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>1024.4 GB total</Paragraph>
                                                        <Paragraph type="warning" style={{ margin: 0, textAlign: 'center', flex: 1 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>502.3 GB em uso</Paragraph>
                                                        <Paragraph style={{ margin: 0, textAlign: 'center', flex: 1 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>226.0 GB livres</Paragraph>
                                                    </Flex>

                                                </Flex>

                                                <Card variant="outlined" size="small">
                                                    <List dataSource={[{ key: '1', label: 'Modificado em', value: RelativeTime.format(new Date()) }, { key: '2', label: 'Criado em', value: RelativeTime.format(new Date()) }]} renderItem={(item) => (
                                                        <List.Item>
                                                            <Statistic key={item.key} title={item.label} value={item.value} />
                                                        </List.Item>
                                                    )} />
                                                </Card>

                                                <Card variant="outlined" size="small">
                                                    <List dataSource={[{ key: '1', label: 'Permissões', value: 'Criar e Deletar Arquivos' }]} renderItem={(item) => (
                                                        <List.Item>
                                                            <Statistic key={item.key} title={item.label} value={item.value} />
                                                        </List.Item>
                                                    )} />
                                                </Card>

                                            </Flex>

                                        </Card>
                                    </Flex>
                            }
                        },]
                },
                { key: '13', label: 'Outros', page: { title: 'Outros', description: '' } },
            ],
        }
    ]

    const [collapsed, setCollapsed] = useState(false)
    const [selected, setSelected] = useState(items[0])

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const findItemByKey = (key, itemList = items) => {
        for (const item of itemList) {
            if (item.key === key) return item;
            if (item.children) {
                const found = findItemByKey(key, item.children);
                if (found) return found;
            }
        }
        return null;
    }

    const handleClick = ({ key }) => {
        const item = findItemByKey(key)
        if (item?.page) {
            setSelected(item)
        } else {
            setSelected(null)
        }
    }

    return (
        <Layout>
            <Row gutter={[16, 16]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                    <Flex vertical gap={'small'} flex={1}>
                        <Search placeholder="Buscar configurações" />
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['test-settings-group']}
                            mode="inline"
                            onClick={handleClick}
                            inlineCollapsed={collapsed}
                            items={items} />
                    </Flex>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                    {selected?.page && (
                        <Flex vertical gap={'large'} style={{ padding: '2rem 0 2rem 0' }}>
                            <Flex vertical flex={1}>
                                <Title level={2} style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{selected.page.title}</Title>
                                <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{selected.page.description}</Paragraph>
                            </Flex>
                            <Flex flex={1}>
                                {selected.page.contents}
                            </Flex>
                        </Flex>
                    )}
                </Col>
            </Row>
        </Layout>
    )
}
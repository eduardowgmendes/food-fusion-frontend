import { Avatar, Breadcrumb, Button, Card, Col, Divider, Flex, Layout, List, Result, Row, Spin, Statistic, Tabs, Tag } from "antd"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import FoodFusionApiClient from "../api/FoodFusionApiClient";
import Title from "antd/es/typography/Title";
import RelativeTime from "../utils/RelativeTime";
import Paragraph from "antd/es/typography/Paragraph";
import { AuditOutlined, BarChartOutlined, BuildOutlined, CheckCircleOutlined, CloseOutlined, DeleteOutlined, ExportOutlined, EyeFilled, MailFilled, MailOutlined, MoonFilled, PhoneFilled, PhoneOutlined, PlusOutlined, RedEnvelopeOutlined, ShopFilled, ShoppingFilled, ShoppingOutlined, SunFilled } from "@ant-design/icons";
import Section from "../components/layout/Section";
import PageToolbar from "../components/layout/PageToolbar";

export default function EstablishmentOverview(props) {

    const { id } = useParams();

    const theme = props.theme;

    const [establishment, setEstablishment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEstablishmentById = async (id) => {
            try {
                const data = await FoodFusionApiClient({
                    endpoint: `/search/restaurants/${id}`,
                    method: 'GET'
                })
                setEstablishment(data.body);
            } catch (err) {
                setError(err.message || 'Erro ao buscar o estabelecimento.')
            } finally {
                setLoading(false);
            }
        }
        fetchEstablishmentById(id)
    }, [id]);

    const getCuisineType = (cuisineType) => {
        switch (cuisineType) {
            case 'ITALIAN': return 'Italiana';
            case 'JAPANESE': return 'Japonesa';
            case 'THAI': return 'Tailandesa';
            case 'CHINESE': return 'Chinesa';
            case 'MEXICAN': return 'Indiana';
            case 'INDIAN': return 'Indiana';
            case 'AMERICAN': return 'Americana';
            case 'FRENCH': return 'Francesa';
            case 'BRAZILIAN': return 'Brasileira';
            case 'MEDITERRANEAN': return 'Mediterrânea';
            case 'SPANISH': return 'Espanhola';
            case 'GREEK': return 'Grega';
            case 'KOREAN': return 'Coreana';
            case 'VIETNAMESE': return 'Vietnamita';
            case 'TURKISH': return 'Turca';
            case 'ARABIC': return 'Árabe';
            default: return 'Desconhecida';
        }
    }

    const typeConfig = {
        ITALIAN: { text: "Italiana", flag: "🇮🇹", },
        JAPANESE: { text: "Japonesa", flag: "🇯🇵" },
        THAI: { text: "Tailandesa", flag: "🇹🇭" },
        CHINESE: { text: "Chinesa", flag: "🇨🇳" },
        MEXICAN: { text: "Mexicana", flag: "🇲🇽" },
        INDIAN: { text: "Indiana", flag: "🇮🇳" },
        AMERICAN: { text: "Americana", flag: "🇺🇸" },
        FRENCH: { text: "Francesa", flag: "🇫🇷" },
        BRAZILIAN: { text: "Brasileira", flag: "🇧🇷" },
        MEDITERRANEAN: { text: "Mediterrânea", flag: "🌊" },
        SPANISH: { text: "Espanhola", flag: "🇪🇸" },
        GREEK: { text: "Grega", flag: "🇬🇷" },
        KOREAN: { text: "Coreana", flag: "🇰🇷" },
        VIETNAMESE: { text: "Vietnamita", flag: "🇻🇳" },
        TURKISH: { text: "Turca", flag: "🇹🇷" },
        ARABIC: { text: "Árabe", flag: "🇸🇦" }
    }

    const cuisineTypeFlag = typeConfig[establishment?.type] || {}

    const getStatus = (value) => {
        return value ? "Inativo" : "Ativo";
    }

    const pageToolbar = {
        title: 'Dados do Estabelecimento',
        description: 'Gerencie seus estabelecimentos com total flexibilidade, permitindo personalizar cada local de forma independente.',
        actions: [{
            type: 'button',
            button: {
                size: 'large',
                type: 'primary',
                disabled: false,
                icon: <ExportOutlined />,
                label: 'Exportar',
                tooltip: 'Gerar Relatórios',
                color: 'primary', // Pode ser ignorado se não for necessário
                variant: 'solid', // Pode ser ignorado também
                onClick: () => {
                    console.log('Botão clicado!');
                }
            }
        }, {
            type: 'button',
            button: {
                size: 'large',
                type: 'primary',
                disabled: false,
                icon: <CloseOutlined />,
                label: 'Deletar',
                tooltip: 'Deletar Estabelecimento',
                color: 'danger', // Pode ser ignorado se não for necessário
                variant: 'solid', // Pode ser ignorado também
                onClick: () => {
                    console.log('Botão clicado!');
                }
            }
        }],
        settings: {}
    }

    return (
        <Layout>

            <Flex vertical gap={'large'}>
                {loading ? (<Flex vertical align="center" justify="center" style={{ minHeight: '50vh' }} gap={'small'}>
                    <Flex align="center" gap={'small'}>
                        <Spin size="large" tip='Carregando dados da API' />
                    </Flex>
                </Flex>) : (establishment ? (
                    <Flex vertical gap={'large'} flex={1}>
                        <Flex vertical gap={'small'} flex={1}>
                            <Flex vertical gap={'small'} flex={1}>
                                <Flex align="center" gap={'small'} flex={1} style={{ marginBottom: '2rem' }}>
                                    <Flex vertical flex={1}>
                                        <PageToolbar title={pageToolbar?.title} description={pageToolbar?.description} actions={pageToolbar.actions} breadcrumb={[
                                            { title: <a href={'/'}>Home</a>, },
                                            { title: <a href={'/establishments'}>Estabelecimentos</a>, },
                                            { title: <a href={window.location.href}>Dados do Estabelecimento</a>, },
                                        ]} />
                                    </Flex>
                                </Flex>
                                <Flex vertical gap={'large'} flex={1} style={{ marginBottom: '2rem' }}>

                                    <Card variant="borderless">
                                        <Flex vertical gap={'large'}>
                                            <Row gutter={[16, 16]}>
                                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                    <Flex vertical align="start" gap={'middle'}>
                                                        <Avatar shape="square" size={'large'} icon={<ShopFilled />} />
                                                        <Flex vertical flex={1}>
                                                            <Title level={3} ellipsis={{ rows: 4, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{establishment?.name}</Title>
                                                            <Paragraph type="secondary" ellipsis={{ rows: 4, expandable: true, symbol: 'ver mais.' }} style={{ margin: 0 }}>{establishment?.description}</Paragraph>
                                                        </Flex>
                                                    </Flex>
                                                </Col>

                                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} xl={{ span: 6 }} xxl={{ span: 6 }}>
                                                    <Flex vertical flex={1} gap={'small'}>
                                                        <Statistic style={{ flex: 1 }} prefix={cuisineTypeFlag?.flag} title={'Culinária de Origem'} value={getCuisineType(establishment?.type)} />
                                                        <Statistic style={{ flex: 1 }} prefix={establishment?.deleted ? <CloseOutlined /> : <CheckCircleOutlined style={{ color: 'springgreen' }} />} title={'Status'} valueStyle={{ color: establishment?.deleted ? '#dc4446' : null }} value={getStatus(establishment?.deleted)} />
                                                    </Flex>
                                                </Col>
                                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} xl={{ span: 6 }} xxl={{ span: 6 }}>
                                                    <Flex vertical flex={1} gap={'small'}>
                                                        <Statistic style={{ flex: 1 }} title={'Criado'} value={RelativeTime.formatDateTime(establishment?.createdAt)} />
                                                        <Statistic style={{ flex: 1 }} title={'Atualizado'} value={establishment?.updatedAt ? RelativeTime.formatDateTime(establishment?.updatedAt) : 'Nunca'} />
                                                    </Flex>
                                                </Col>
                                            </Row>

                                            <Tabs defaultActiveKey="1" items={[
                                                { key: '1', label: 'Bio', children: null },
                                                { key: '2', label: 'Endereço', children: establishment?.address ? null : <Result status={'404'} title='Nenhum endereço encontrado' /> },
                                                {
                                                    key: '3', label: 'Menus', children: establishment?.menus ?
                                                        <Section title={'Menus'} description={'Gerencie os pratos e produtos que farão parte do seu cardápio digital. Os menus criados aqui serão exibidos automaticamente para seus clientes no ambiente online.'} helper={{ tooltip: 'Os menus adicionados nesta seção aparecerão no cardápio digital visível aos seus clientes. Certifique-se de organizar e ativar os menus para que estejam disponíveis na visualização pública.' }} contents={
                                                            <Flex vertical gap={'large'} flex={1}>
                                                                <List dataSource={establishment?.menus} renderItem={(menu) => (
                                                                    <List.Item>
                                                                        <Flex vertical gap={'large'} flex={1}>
                                                                            <Section title={menu?.name}
                                                                                description={menu?.description}
                                                                                actions={[
                                                                                    { href: null, name: 'Deletar Menu', icon: <DeleteOutlined /> },
                                                                                    { href: null, name: 'Desabilitar Menu', icon: <EyeFilled /> }]}
                                                                                contents={<List dataSource={menu?.items} renderItem={(item) => (
                                                                                    <List.Item>
                                                                                        <Flex align="center" gap={'middle'} flex={1}>
                                                                                            {item?.showcasePictures !== null || item?.showcasePictures.length > 0 ? (<Avatar shape="square" src={`data:image/png;base64,${item?.showcasePictures?.[0]}`} />) : (<Avatar shape="square" icon={<ShoppingFilled />} />)}
                                                                                            <Flex vertical flex={1}>
                                                                                                <Paragraph ellipsis={{ rows: 4, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{item?.name}</Paragraph>
                                                                                                <Paragraph type="secondary" ellipsis={{ rows: 4, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{item?.description}</Paragraph>
                                                                                            </Flex>
                                                                                            <Paragraph type="secondary" ellipsis={{ rows: 4, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{`R$ ${item?.unitPrice}`}</Paragraph>
                                                                                        </Flex>
                                                                                    </List.Item>
                                                                                )} />}
                                                                            />
                                                                        </Flex>

                                                                    </List.Item>
                                                                )} />
                                                            </Flex>
                                                        } /> : <Result status={'404'} title='Nenhum menu encontrado' subTitle='Nenhum menu foi encontrado. Cadastre um novo menu para começar a estruturar as opções do seu cardápio.' extra={<Button type="default" icon={<PlusOutlined />}>Novo</Button>} />
                                                },
                                                {
                                                    key: '4', label: 'Contato', children: establishment?.phone || establishment?.email ?
                                                        <Flex vertical gap={'large'}>

                                                            <Section title={'Telefone'} helper={{ tooltip: '' }} contents={
                                                                establishment?.phone ? <Flex vertical gap={'large'} flex={1}>
                                                                    <Card>
                                                                        <Flex vertical flex={1} gap={'small'}>
                                                                            <Paragraph type="secondary" ellipsis={{ rows: 4, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{`${establishment?.phone?.prefix} - ${establishment?.phone?.phoneNumber}.`}</Paragraph>
                                                                        </Flex>
                                                                    </Card>
                                                                </Flex> : <Result status={'info'} icon={<PhoneOutlined />} title='Nenhum telefone encontrado.' subTitle='Cadastre um número de telefone para permitir que seus clientes entrem em contato com mais facilidade.' extra={<Button type="default" icon={<PlusOutlined />}>Novo</Button>} />
                                                            } />

                                                            <Section title={'E-mail'} helper={{ tooltip: '' }} contents={
                                                                establishment?.email ? (<Flex vertical gap={'large'} flex={1}>
                                                                    <Card>
                                                                        <Flex vertical flex={1} gap={'small'}>
                                                                            <Paragraph type="secondary" ellipsis={{ rows: 4, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{`${establishment?.phone?.prefix} - ${establishment?.phone?.phoneNumber}.`}</Paragraph>
                                                                        </Flex>
                                                                    </Card>
                                                                </Flex>) : (<Result status={'info'} icon={<MailOutlined />} title='Nenhum e-mail encontrado.' subTitle='Cadastre um novo e-mail como alternativa adicional de contato para facilitar a comunicação com seus clientes.' extra={<Button type="default" icon={<PlusOutlined />}>Novo</Button>} />)
                                                            } />

                                                        </Flex> : <Result status={'404'} title='Nenhum contato encontrado.' />
                                                },
                                                {
                                                    key: '5', label: 'Horários de Atendimento', children: establishment?.serviceTimes ?
                                                        <Flex vertical gap={'large'}>
                                                            <Section title={'Horários de Serviço'} helper={{ tooltip: '' }} contents={
                                                                <List dataSource={establishment?.serviceTimes} renderItem={(serviceTime) => (
                                                                    <List.Item>
                                                                        <Flex vertical gap={'large'} >
                                                                            <Flex vertical >
                                                                                <Title level={4} ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0, flex: 1 }}>{serviceTime?.name}</Title>
                                                                                <Flex align="center" justify="space-between" flex={1}>
                                                                                    <Paragraph type="secondary" ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{`Abre ${serviceTime?.opensAt} | Fecha ${serviceTime?.closesAt}`}</Paragraph>
                                                                                </Flex>
                                                                            </Flex>
                                                                        </Flex>
                                                                    </List.Item>
                                                                )} />
                                                            } />
                                                        </Flex> : <Result status={'404'} title='Nenhum horário de atendimento encontrado' />
                                                },
                                                { key: '6', label: 'Estatísticas', children: <Result status={'error'} title='Estatísticas não disponíveis.' subTitle='Em breve você poderá visualizar estatísticas completas.' icon={<BarChartOutlined />} /> },
                                                { key: '7', label: 'Estoque', children: <Result status={'error'} title='Estoque não disponível.' subTitle='Em breve você poderá visualizar e configurar todo o estoque.' icon={<BuildOutlined />} /> },
                                            ]} />
                                        </Flex>
                                    </Card>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>) : (null))}

            </Flex>
        </Layout>
    )
}
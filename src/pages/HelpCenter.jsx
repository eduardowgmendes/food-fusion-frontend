import { Avatar, Button, Card, Flex, Image, Layout, List, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Section from "../components/layout/Section";
import {
    ShopOutlined,
    PlusSquareOutlined,
    DollarOutlined,
    BarChartOutlined,
    DashboardOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    ProfileOutlined,
    ControlOutlined,
    AppstoreOutlined,
    TeamOutlined,
    HighlightOutlined,
    ApiOutlined,
    TagsOutlined,
    DatabaseOutlined,
    PartitionOutlined,
    InboxOutlined,
    DeploymentUnitOutlined,
    HistoryOutlined,
    FormOutlined,
    AppstoreAddOutlined,
    PictureOutlined,
    DollarCircleOutlined,
    ClockCircleOutlined,
    GiftOutlined,
    SyncOutlined,
    HourglassOutlined,
    PlusCircleOutlined,
    BellOutlined,
    TransactionOutlined,
    LineChartOutlined,
    FileSearchOutlined,
    PieChartOutlined,
    SlidersOutlined,
    LockOutlined,
    SafetyOutlined,
    CloudUploadOutlined,
    BugOutlined,
    QuestionCircleTwoTone,
    RightOutlined,
    IeOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';
import PageToolbar from "../components/layout/PageToolbar";
import Search from "antd/es/input/Search";

export default function HelpCenter() {

    const helpCenterTopics = [
        {
            category: "Criar e Gerenciar Estabelecimentos",
            description: "Orientações para criar, configurar e administrar seus estabelecimentos de forma eficiente.",
            topics: [
                { title: "Novo Estabelecimento", description: "Crie e configure um novo estabelecimento em poucos passos.", icon: <ShopOutlined />, color: "#FF6B6B" },
                { title: "Cadastrar Produtos", description: "Adicione novos produtos ao seu catálogo para venda ou estoque.", icon: <PlusSquareOutlined />, color: "#6BCB77" },
                { title: "Gerenciar Financeiro", description: "Controle suas finanças e acompanhe o fluxo de caixa de seus estabelecimentos.", icon: <DollarOutlined />, color: "#4D96FF" },
                { title: "Relatórios de Desempenho", description: "Visualize o desempenho dos seus negócios com relatórios detalhados e insights estratégicos.", icon: <BarChartOutlined />, color: "#FFD93D" },
                { title: "Dashboard de Controle", description: "Gerencie seus estabelecimentos com painéis intuitivos e informações centralizadas.", icon: <DashboardOutlined />, color: "#FF6F91" }
            ]
        },
        {
            category: "Gerenciamento de Estabelecimentos",
            description: "Ferramentas e processos para administrar as operações diárias dos seus estabelecimentos.",
            topics: [
                { title: "Configurações de Estabelecimento", description: "Personalize informações, horários, cardápios e mais para cada unidade.", icon: <SettingOutlined />, color: "#845EC2" },
                { title: "Central de Pedidos", description: "Organize e acompanhe os pedidos realizados em tempo real.", icon: <ShoppingCartOutlined />, color: "#FFC75F" },
                { title: "Administração de Cardápios", description: "Crie e gerencie menus digitais personalizados para cada estabelecimento.", icon: <ProfileOutlined />, color: "#F9F871" }
            ]
        },
        {
            category: "Configurações do Sistema",
            description: "Ajustes e personalizações para adaptar o sistema às necessidades do seu negócio.",
            topics: [
                { title: "Painel de Configurações", description: "Descubra as principais configurações para personalizar seu sistema e gerenciar usuários.", icon: <ControlOutlined />, color: "#0081CF" },
                { title: "Configurações Gerais", description: "Ajuste as informações essenciais do seu negócio.", icon: <AppstoreOutlined />, color: "#00C9A7" },
                { title: "Usuários e Permissões", description: "Defina níveis de acesso e atribua funções conforme as responsabilidades da equipe.", icon: <TeamOutlined />, color: "#F6C90E" },
                { title: "Personalização do Sistema", description: "Adapte o sistema à identidade visual e operacional do seu estabelecimento.", icon: <HighlightOutlined />, color: "#FF9671" },
                { title: "Integrações com Soluções Externas", description: "Conecte seu sistema a plataformas de pagamento, delivery e muito mais.", icon: <ApiOutlined />, color: "#FF6F61" }
            ]
        },
        {
            category: "Gestão de Estoque",
            description: "Funcionalidades para organizar, controlar e monitorar o estoque de produtos.",
            topics: [
                { title: "Categorias de Produtos", description: "Organize seus itens em categorias para facilitar a gestão e a busca.", icon: <TagsOutlined />, color: "#B39CD0" },
                { title: "Cadastro e Controle de Produtos", description: "Registre, edite e monitore os itens disponíveis em estoque.", icon: <DatabaseOutlined />, color: "#6A2C70" },
                { title: "Unidades de Medida", description: "Mantenha um controle preciso das quantidades de cada produto.", icon: <PartitionOutlined />, color: "#FF7F50" },
                { title: "Controle de Inventário", description: "Monitore entradas e saídas, garantindo um estoque sempre atualizado.", icon: <InboxOutlined />, color: "#17E9E0" },
                { title: "Rastreamento de Lotes", description: "Acompanhe a movimentação e validade de cada lote de produtos.", icon: <DeploymentUnitOutlined />, color: "#FFB6B9" },
                { title: "Relatórios de Movimentação", description: "Visualize o histórico detalhado de movimentações do seu estoque.", icon: <HistoryOutlined />, color: "#00C1D4" }
            ]
        },
        {
            category: "Configurações de Cardápios Digitais",
            description: "Recursos para criar, personalizar e gerenciar cardápios digitais atrativos e funcionais.",
            topics: [
                { title: "Criação de Cardápios", description: "Estruture seus menus de forma profissional e atrativa.", icon: <FormOutlined />, color: "#E4BAD4" },
                { title: "Organização por Categorias", description: "Agrupe pratos e produtos para uma navegação eficiente.", icon: <AppstoreAddOutlined />, color: "#FF9A76" },
                { title: "Personalização de Itens", description: "Adicione descrições, imagens e informações para destacar seus produtos.", icon: <PictureOutlined />, color: "#F67280" },
                { title: "Preços e Tamanhos Variáveis", description: "Ofereça flexibilidade com diferentes tamanhos e valores.", icon: <DollarCircleOutlined />, color: "#355C7D" },
                { title: "Configuração de Disponibilidade", description: "Defina horários e dias específicos para a oferta de cada item.", icon: <ClockCircleOutlined />, color: "#6B5B95" },
                { title: "Itens Sazonais e Ofertas Especiais", description: "Crie promoções e destaques conforme datas comemorativas ou campanhas.", icon: <GiftOutlined />, color: "#FEB236" },
                { title: "Integração com Estoque", description: "Sincronize automaticamente a disponibilidade dos itens com o seu inventário.", icon: <SyncOutlined />, color: "#D64161" }
            ]
        },
        {
            category: "Configurações de Pedidos e Atendimento",
            description: "Opções para configurar o fluxo de pedidos e aprimorar o atendimento ao cliente.",
            topics: [
                { title: "Métodos de Pedido", description: "Configure as opções de atendimento: presencial, delivery ou retirada.", icon: <ShoppingCartOutlined />, color: "#FF7C7C" },
                { title: "Tempos de Preparação Estimados", description: "Gerencie as expectativas do cliente com prazos realistas de preparo.", icon: <HourglassOutlined />, color: "#3D84A8" },
                { title: "Modificadores e Adicionais", description: "Permita personalizações nos pedidos com opções extras ou complementares.", icon: <PlusCircleOutlined />, color: "#46CDCF" },
                { title: "Integração com Notificações", description: "Garanta uma comunicação eficiente com notificações em tempo real.", icon: <BellOutlined />, color: "#ABDEE6" },
                { title: "Configuração de Taxas de Entrega", description: "Defina os valores de entrega conforme regiões e políticas internas.", icon: <TransactionOutlined />, color: "#CBAACB" }
            ]
        },
        {
            category: "Relatórios e Análises",
            description: "Relatórios e análises estratégicas para apoiar a gestão e o crescimento do seu negócio.",
            topics: [
                { title: "Relatórios de Vendas", description: "Monitore o desempenho comercial e tome decisões estratégicas.", icon: <LineChartOutlined />, color: "#FFAAA5" },
                { title: "Relatórios de Estoque", description: "Controle o fluxo de mercadorias com relatórios atualizados.", icon: <DatabaseOutlined />, color: "#FFD3B6" },
                { title: "Relatórios de Pedidos", description: "Avalie padrões de consumo e eficiência no atendimento.", icon: <FileSearchOutlined />, color: "#D5AAFF" },
                { title: "Análises de Consumo e Preferências", description: "Identifique tendências e oportunidades com dados precisos.", icon: <PieChartOutlined />, color: "#A8E6CF" },
                { title: "Relatórios Personalizados", description: "Crie relatórios sob medida para as necessidades específicas do seu negócio.", icon: <SlidersOutlined />, color: "#DCB239" }
            ]
        },
        {
            category: "Segurança e Backup",
            description: "Configurações essenciais para proteger dados e garantir a continuidade do sistema.",
            topics: [
                { title: "Configurações de Senhas", description: "Garanta a proteção de dados com políticas robustas de senha.", icon: <LockOutlined />, color: "#F67280" },
                { title: "Autenticação em Duas Etapas", description: "Adicione uma camada extra de segurança para o acesso ao sistema.", icon: <SafetyOutlined />, color: "#C06C84" },
                { title: "Backup Automático", description: "Assegure a preservação das informações com rotinas automatizadas de backup.", icon: <CloudUploadOutlined />, color: "#6C5B7B" }
            ]
        }
    ];

    const onSearch = (value) => {
        if (!value.trim()) {
            setFilteredSettings(settings)
            return
        }

        const results = settings.map(group => ({
            ...group,
            options: group.options.filter(option => option.title.toLowerCase().includes(value.toLowerCase()))
        })).filter(group => group.options.length > 0)

        setFilteredSettings(results)
    }

    return (
        <Layout>

            <Flex vertical gap={'small'}>

                <Flex vertical gap={'large'}>

                    <Flex vertical gap={'middle'}>

                        <PageToolbar
                            title={'Central de Ajuda'}
                            description={'Bem-vindo à Central de Ajuda! Aqui você encontra um conjunto completo de conteúdos, guias e orientações para facilitar a utilização do nosso sistema de gerenciamento de estabelecimentos. Nosso objetivo é oferecer suporte eficiente para que você possa aproveitar ao máximo todas as funcionalidades da plataforma, esclarecendo dúvidas e solucionando eventuais dificuldades de forma rápida e prática.'}
                            actions={null}
                            breadcrumb={[
                                { title: <a href={'/'}>Home</a>, },
                                { title: <a href={window.location.href}>Central de Ajuda</a>, },
                            ]}
                            settings={null} />

                        <Search placeholder="Localizar uma tópico de ajuda" enterButton="Buscar" onSearch={onSearch} size="large" allowClear />

                    </Flex>

                    <Card variant="borderless">

                        <Section title={'Principais Tópicos de Ajuda'} description={'Encontre respostas rápidas para as dúvidas mais comuns. Aqui reunimos os assuntos mais buscados para ajudar você a aproveitar todos os recursos do sistema com facilidade. Explore os tópicos abaixo ou utilize a busca para localizar algo específico.'} contents={

                            <Flex vertical gap={'middle'}>

                                <List grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 2, xxl: 2 }} dataSource={helpCenterTopics} renderItem={(helpTopic) => (
                                    <List.Item>

                                        <Section title={helpTopic.category} description={helpTopic.description} contents={
                                            <List dataSource={helpTopic.topics} renderItem={(topic) => (
                                                <List.Item style={{ padding: '1rem 0rem 1rem 0rem' }}>
                                                    <Flex align="center" gap={'middle'} flex={1}>
                                                        <Avatar style={{ backgroundColor: `${topic.color}` }} icon={topic.icon} shape="square" size={'large'} />
                                                        <Flex vertical flex={1}>
                                                            <Paragraph style={{ fontWeight: "bold", margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{topic.title}</Paragraph>
                                                            <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 2, expandable: true, symbol: 'Ver mais.' }}>{topic.description}</Paragraph>
                                                        </Flex>
                                                    </Flex>
                                                </List.Item>
                                            )} />
                                        } />

                                    </List.Item>
                                )} />
                            </Flex>
                        } />
                    </Card>

                </Flex>

            </Flex>

        </Layout >
    )
}
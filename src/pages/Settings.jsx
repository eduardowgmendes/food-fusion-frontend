import { UserOutlined, SettingOutlined, DatabaseOutlined, MenuOutlined, FileTextOutlined, LockOutlined, BarChartOutlined, ControlOutlined, ClusterOutlined, TagsOutlined, TableOutlined, SafetyOutlined, AppstoreOutlined, WalletOutlined, RightOutlined, HomeOutlined, ShopOutlined, ExperimentOutlined, ApiOutlined, ShareAltOutlined, SecurityScanOutlined, FileExclamationOutlined, BgColorsOutlined, MailOutlined, LineChartOutlined, AuditOutlined, SafetyCertificateOutlined, CloudOutlined, TeamOutlined, GiftOutlined, FileProtectOutlined, UserAddOutlined, ClockCircleOutlined, CreditCardOutlined, SyncOutlined, BellOutlined, DollarOutlined, ShoppingCartOutlined, AppstoreAddOutlined, PictureOutlined, UserSwitchOutlined, PartitionOutlined, InboxOutlined, HistoryOutlined, ScheduleOutlined, FormOutlined, PlusSquareOutlined, NotificationOutlined, CarOutlined, FileDoneOutlined, PieChartOutlined, CloudUploadOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Flex, Input, Layout, List, Result, Row, Select, Splitter, Switch } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Search from "antd/es/input/Search";
import { useState } from "react";
import PageToolbar from '../components/layout/PageToolbar';

export default function Settings(props) {

    const [settings, setSettings] = useState([{
        groupName: 'Painel de Configurações',
        options: [{
            color: { primary: '#0eca59', secondary: '#b4f4cd', tertiary: '#0eca59' },
            icon: <HomeOutlined />,
            title: 'Início',
            description: 'Descubra as principais configurações para personalizar seu sistema, definir horários, gerenciar usuários e muito mais.',
            key: '/settings/home',
            content: {
                layout: 'section',
                data: {
                    sections:
                        [{
                            title: 'Início',
                            description: 'Descubra as principais configurações para personalizar seu sistema, definir horários, gerenciar usuários e muito mais.',
                            helper: { tooltip: 'Descubra as principais configurações para personalizar seu sistema, definir horários, gerenciar usuários e muito mais.' },
                            contents: <List dataSource={[
                                { title: 'Configurações Gerais', description: 'Gerencie as configurações básicas do seu estabelecimento.', type: 'clickable' },
                                { title: 'Dados do Estabelecimento', description: 'Informações essenciais do seu negócio.', type: 'clickable' },
                                { title: 'Usuários e Permissões', description: 'Defina níveis de acesso para cada função.', type: 'clickable' },
                                { title: 'Personalização do Sistema', description: 'Adapte o sistema à identidade do seu estabelecimento.', type: 'clickable' },
                                { title: 'Integrações', description: 'Conecte seu sistema a soluções externas.', type: 'clickable' },
                                { title: 'Configurações de Estoque', description: 'Gerencie seus itens e controle de inventário.', type: 'clickable' },
                                { title: 'Categorias de Produtos', description: 'Agrupe seus itens de forma organizada.', type: 'clickable' },
                                { title: 'Cadastro de Produtos', description: 'Registre e gerencie os itens disponíveis.', type: 'clickable' },
                                { title: 'Unidades de Medida', description: 'Controle preciso das quantidades em estoque.', type: 'clickable' },
                                { title: 'Controle de Inventário', description: 'Monitore entradas e saídas com eficiência.', type: 'clickable' },
                                { title: 'Rastreamento de Lotes', description: 'Acompanhe a movimentação detalhada dos lotes.', type: 'clickable' },
                                { title: 'Relatórios de Movimentação', description: 'Visualize o histórico do seu estoque.', type: 'clickable' },
                                { title: 'Configurações de Cardápios Digitais', description: 'Organize e personalize seus menus digitais.', type: 'clickable' },
                                { title: 'Criação de Cardápios', description: 'Estruture seus menus de forma profissional.', type: 'clickable' },
                                { title: 'Organização por Categorias', description: 'Agrupe os pratos para facilitar a navegação.', type: 'clickable' },
                                { title: 'Personalização de Descrições e Imagens', description: 'Destaque cada item com detalhes visuais.', type: 'clickable' },
                                { title: 'Preços e Tamanhos Variáveis', description: 'Flexibilidade para ajustar preços e tamanhos.', type: 'clickable' },
                                { title: 'Configuração de Disponibilidade', description: 'Defina a oferta conforme a demanda.', type: 'clickable' },
                                { title: 'Itens Sazonais e Ofertas Especiais', description: 'Crie experiências únicas para seus clientes.', type: 'clickable' },
                                { title: 'Integração com Estoque', description: 'Sincronize automaticamente com seu inventário.', type: 'clickable' },
                                { title: 'Configurações de Pedidos e Atendimento', description: 'Defina como os pedidos serão gerenciados.', type: 'clickable' },
                                { title: 'Métodos de Pedido', description: 'Configure as opções de atendimento.', type: 'clickable' },
                                { title: 'Tempos de Preparação Estimados', description: 'Gerencie a expectativa do cliente.', type: 'clickable' },
                                { title: 'Modificadores e Adicionais', description: 'Personalize os pedidos com flexibilidade.', type: 'clickable' },
                                { title: 'Integração com Sistemas de Notificação', description: 'Mantenha a comunicação eficiente.', type: 'clickable' },
                                { title: 'Configuração de Taxas de Entrega', description: 'Defina os custos com precisão.', type: 'clickable' },
                                { title: 'Relatórios e Análises', description: 'Avalie o desempenho do seu negócio.', type: 'clickable' },
                                { title: 'Relatórios de Vendas', description: 'Monitore o desempenho comercial.', type: 'clickable' },
                                { title: 'Relatórios de Estoque', description: 'Controle o fluxo de mercadorias.', type: 'clickable' },
                                { title: 'Relatórios de Pedidos', description: 'Avalie os padrões de consumo.', type: 'clickable' },
                                { title: 'Análises de Consumo e Preferências', description: 'Identifique tendências e oportunidades.', type: 'clickable' },
                                { title: 'Relatórios Personalizados', description: 'Crie análises sob medida para seu negócio.', type: 'clickable' },
                                { title: 'Segurança e Backup', description: 'Mantenha seus dados protegidos.', type: 'clickable' },
                                { title: 'Configurações de Senhas', description: 'Mantenha os dados protegidos.', type: 'clickable' },
                                { title: 'Autenticação em Duas Etapas', description: 'Aumente a segurança do sistema.', type: 'clickable' },
                                { title: 'Backup Automático', description: 'Garanta a preservação dos seus dados.', type: 'clickable' },
                                { title: 'Auditoria de Atividades', description: 'Registre as ações dos usuários.', type: 'clickable' }
                            ]} renderItem={(help) => (
                                <List.Item>
                                    <Flex align='center' flex={1} gap={'middle'}>
                                        <Flex vertical>
                                            <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 2, expandable: false, symbol: '...' }}>{help.title}</Paragraph>
                                            <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{help.description}</Paragraph>
                                        </Flex>
                                    </Flex>
                                </List.Item>
                            )} />
                        },
                        {
                            title: 'Informações da Aplicação',
                            description: 'Explore as configurações essenciais para personalizar seu sistema, configurar horários, gerenciar usuários e otimizar seu ambiente de trabalho.',
                            helper: { tooltip: 'Configure parâmetros-chave para adaptar o sistema às suas necessidades, incluindo horários, usuários e outras funcionalidades importantes.' },
                            contents: <List dataSource={[
                                { title: 'Configurações Gerais', description: 'Gerencie as configurações básicas do seu estabelecimento.', type: 'clickable' },
                                { title: 'Dados do Estabelecimento', description: 'Informações essenciais do seu negócio.', type: 'clickable' },
                                { title: 'Usuários e Permissões', description: 'Defina níveis de acesso para cada função.', type: 'clickable' },
                                { title: 'Personalização do Sistema', description: 'Adapte o sistema à identidade do seu estabelecimento.', type: 'clickable' }
                            ]} renderItem={(help) => (
                                <List.Item>
                                    <Flex align='center' flex={1} gap={'middle'}>
                                        <Flex vertical>
                                            <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 2, expandable: false, symbol: '...' }}>{help.title}</Paragraph>
                                            <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{help.description}</Paragraph>
                                        </Flex>
                                    </Flex>
                                </List.Item>
                            )} />
                        }]
                }
            }
        }]
    },
    {
        groupName: 'Configurações Gerais',
        options: [
            {
                color: { primary: '#2c3e50', secondary: '#bed7f1', tertiary: '#2c3e50' },
                icon: <SettingOutlined />,
                title: 'Aplicação',
                description: 'Informações essenciais do seu negócio.',
                key: '/settings/establishment-settings',
                content: {
                    layout: 'list',
                    data: [
                        {
                            title: 'Opção A',
                            type: 'switch',
                            value: false
                        },
                        {
                            title: 'CNPJ do Estabelecimento',
                            type: 'input',
                            input: {
                                placeholder: 'Digite o CNPJ',
                                value: '12.345.678/0001-99'
                            },
                        },
                        {
                            title: 'Exibir Data de Fundação',
                            type: 'switch',
                            value: true
                        },
                        {
                            title: 'Tipo de Estabelecimento',
                            type: 'select',
                            select: {
                                items: [
                                    { label: 'Restaurante', value: 'restaurante' },
                                    { label: 'Padaria', value: 'padaria' },
                                    { label: 'Cafeteria', value: 'cafeteria' },
                                    { label: 'Mercado', value: 'mercado' }
                                ],
                                onChange: (item) => console.log(item)
                            },
                        },
                        {
                            title: 'Serviço de Entrega Disponível',
                            type: 'switch',
                            value: false
                        },
                        {
                            title: 'Horário de Funcionamento',
                            type: 'input',
                            input: {
                                placeholder: 'Ex: 08:00 às 18:00',
                                value: '08:00 às 18:00'
                            },
                        },
                        {
                            title: 'Categoria do Estabelecimento',
                            type: 'select',
                            select: {
                                items: [
                                    { label: 'Fast Food', value: 'fast-food' },
                                    { label: 'Gourmet', value: 'gourmet' },
                                    { label: 'Delivery', value: 'delivery' },
                                    { label: 'Café', value: 'cafe' }
                                ],
                                onChange: (item) => console.log(item)
                            },
                        }
                    ]
                }
            },
            {
                color: { primary: '#2980b9', secondary: '#d3eeff', tertiary: '#2980b9' }, icon: <UserOutlined />, title: 'Usuários e Permissões', description: 'Defina níveis de acesso para cada função.', key: '/users-and-permissions', content: {
                    layout: 'list', data: [{
                        title: 'Opção A',
                        type: 'switch',
                        value: true
                    }, {
                        title: 'Opção B',
                        type: 'switch',
                        value: false
                    },]
                }
            },

            { color: { primary: '#27ae60', secondary: '#c6fddd', tertiary: '#27ae60' }, icon: <ControlOutlined />, title: 'Personalização do Sistema', description: 'Adapte o sistema à identidade do seu estabelecimento.', key: '/system-customize', content: { layout: 'list', data: [{ title: 'Tema Claro', type: 'switch', value: true }, { title: 'Tema Escuro', type: 'switch', value: false }, { title: 'Padrão do Sistema', type: 'switch', value: true }] } },
            { color: { primary: '#c0392b', secondary: '#ffd5d0', tertiary: '#c0392b' }, icon: <ClusterOutlined />, title: 'Integrações', description: 'Conecte seu sistema a soluções externas.', key: '/integrations', content: { layout: 'list', data: [] } },
        ],
    },
    {
        groupName: 'Configurações de Estoque',
        options: [
            {
                color: { primary: '#f39c12', secondary: '#f7e2c0', tertiary: '#f39c12' }, icon: <TagsOutlined />, title: 'Categorias de Produtos', description: 'Agrupe seus itens de forma organizada.', key: '/product-category', content: {
                    layout: 'list', data: [
                        { title: 'Habilitar subcategorias', type: 'switch', value: true },
                        { title: 'Permitir múltiplas categorias', type: 'switch', value: false },
                        { title: 'Exibir contagem de produtos', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#16a085', secondary: '#beefe5', tertiary: '#16a085' },
                icon: <AppstoreOutlined />, title: 'Cadastro de Produtos', description: 'Registre e gerencie os itens disponíveis.', key: '/product-registration', content: {
                    layout: 'list', data: [
                        { title: 'Notificar sobre baixa quantidade', type: 'switch', value: true },
                        { title: 'Permitir variantes de produtos', type: 'switch', value: true },
                        { title: 'Habilitar código de barras', type: 'switch', value: false }
                    ]
                }
            },
            {
                color: { primary: '#d35400', secondary: '#ffd5b8', tertiary: '#d35400' },
                icon: <TableOutlined />, title: 'Unidades de Medida', description: 'Controle preciso das quantidades em estoque.', key: '/measurement-units', content: {
                    layout: 'list', data: [
                        { title: 'Permitir múltiplas unidades por produto', type: 'switch', value: false },
                        { title: 'Ativar conversão automática', type: 'switch', value: true },
                        { title: 'Exibir unidade padrão', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#7f8c8d', secondary: '#d6edef', tertiary: '#7f8c8d' },
                icon: <DatabaseOutlined />, title: 'Controle de Inventário', description: 'Monitore entradas e saídas com eficiência.', key: '/inventory-control', content: {
                    layout: 'list', data: [
                        { title: 'Habilitar inventário em tempo real', type: 'switch', value: true },
                        { title: 'Permitir ajuste manual', type: 'switch', value: false },
                        { title: 'Notificações para baixa de estoque', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#34495e', secondary: '#b4daff', tertiary: '#34495e' }, icon: <SafetyOutlined />, title: 'Rastreamento de Lotes', description: 'Acompanhe a movimentação detalhada dos lotes.', key: '/batch-tracking', content: {
                    layout: 'list', data: [
                        { title: 'Exigir número de lote', type: 'switch', value: true },
                        { title: 'Habilitar data de validade', type: 'switch', value: true },
                        { title: 'Permitir histórico de movimentação', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#8e44ad', secondary: '#eab9ff', tertiary: '#8e44ad' }, icon: <FileTextOutlined />, title: 'Relatórios de Movimentação', description: 'Visualize o histórico do seu estoque.', key: '/movement-reports', content: {
                    layout: 'list', data: [
                        { title: 'Gerar relatórios automáticos', type: 'switch', value: false },
                        { title: 'Exportar para Excel', type: 'switch', value: true },
                        { title: 'Enviar relatórios por e-mail', type: 'switch', value: false }
                    ]
                }
            }
        ]
    }
        ,

    {
        groupName: 'Configurações de Cardápios Digitais',
        options: [
            {
                color: { primary: '#9b59b6', secondary: '#e8dff0', tertiary: '#9b59b6' },
                icon: <AppstoreOutlined />,
                title: 'Criação de Cardápios',
                description: 'Estruture seus menus de forma profissional.',
                key: '/menu-creation',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Permitir múltiplos cardápios', type: 'switch', value: true },
                        { title: 'Habilitar publicação imediata', type: 'switch', value: false },
                        { title: 'Exibir menus por horário', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#3498db', secondary: '#d6ebf7', tertiary: '#3498db' },
                icon: <TagsOutlined />,
                title: 'Organização por Categorias',
                description: 'Agrupe os pratos para facilitar a navegação.',
                key: '/menu-categories',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Habilitar subcategorias', type: 'switch', value: true },
                        { title: 'Exibir número de itens por categoria', type: 'switch', value: false },
                        { title: 'Ordenar categorias automaticamente', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#e67e22', secondary: '#f7e3d0', tertiary: '#e67e22' },
                icon: <FileTextOutlined />,
                title: 'Personalização de Descrições e Imagens',
                description: 'Destaque cada item com detalhes visuais.',
                key: '/description-customization',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Permitir imagens personalizadas', type: 'switch', value: true },
                        { title: 'Habilitar descrição estendida', type: 'switch', value: true },
                        { title: 'Exigir descrição mínima', type: 'switch', value: false }
                    ]
                }
            },
            {
                color: { primary: '#2ecc71', secondary: '#d2f3e0', tertiary: '#2ecc71' },
                icon: <WalletOutlined />,
                title: 'Preços e Tamanhos Variáveis',
                description: 'Flexibilidade para ajustar preços e tamanhos.',
                key: '/variable-prices',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Habilitar tamanhos diferentes', type: 'switch', value: true },
                        { title: 'Permitir preços promocionais', type: 'switch', value: true },
                        { title: 'Exibir todos os tamanhos no menu', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#1abc9c', secondary: '#d1f3ed', tertiary: '#1abc9c' },
                icon: <SettingOutlined />,
                title: 'Configuração de Disponibilidade',
                description: 'Defina a oferta conforme a demanda.',
                key: '/availability-settings',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Agendar disponibilidade', type: 'switch', value: true },
                        { title: 'Ocultar itens indisponíveis', type: 'switch', value: true },
                        { title: 'Notificar clientes sobre indisponibilidade', type: 'switch', value: false }
                    ]
                }
            },
            {
                color: { primary: '#e74c3c', secondary: '#f9d6d3', tertiary: '#e74c3c' },
                icon: <TagsOutlined />,
                title: 'Itens Sazonais e Ofertas Especiais',
                description: 'Crie experiências únicas para seus clientes.',
                key: '/seasonal-items',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Ativar itens sazonais', type: 'switch', value: true },
                        { title: 'Definir datas de validade para ofertas', type: 'switch', value: true },
                        { title: 'Notificar clientes sobre novas ofertas', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#f1c40f', secondary: '#fcf4d1', tertiary: '#f1c40f' },
                icon: <ClusterOutlined />,
                title: 'Integração com Estoque',
                description: 'Sincronize automaticamente com seu inventário.',
                key: '/inventory-integration',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Atualizar estoque automaticamente', type: 'switch', value: true },
                        { title: 'Bloquear pedidos de itens esgotados', type: 'switch', value: true },
                        { title: 'Exibir status do estoque no menu', type: 'switch', value: false }
                    ]
                }
            }
        ]
    },
    {
        groupName: 'Configurações de Pedidos e Atendimento',
        options: [
            {
                color: { primary: '#34495e', secondary: '#d0d5da', tertiary: '#34495e' },
                icon: <FileTextOutlined />,
                title: 'Métodos de Pedido',
                description: 'Configure as opções de atendimento.',
                key: '/order-methods',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Permitir pedidos online', type: 'switch', value: true },
                        { title: 'Ativar pedidos para retirada', type: 'switch', value: true },
                        { title: 'Habilitar pedidos agendados', type: 'switch', value: false }
                    ]
                }
            },
            {
                color: { primary: '#2c3e50', secondary: '#cdd5db', tertiary: '#2c3e50' },
                icon: <FileTextOutlined />,
                title: 'Tempos de Preparação Estimados',
                description: 'Gerencie a expectativa do cliente.',
                key: '/preparation-times',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Exibir tempo estimado', type: 'switch', value: true },
                        { title: 'Permitir ajustes manuais', type: 'switch', value: true },
                        { title: 'Enviar atualizações automáticas', type: 'switch', value: false }
                    ]
                }
            },
            {
                color: { primary: '#95a5a6', secondary: '#e1e6e6', tertiary: '#95a5a6' },
                icon: <TagsOutlined />,
                title: 'Modificadores e Adicionais',
                description: 'Personalize os pedidos com flexibilidade.',
                key: '/modifiers-add-ons',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Permitir modificadores personalizados', type: 'switch', value: true },
                        { title: 'Cobrar adicionais automaticamente', type: 'switch', value: true },
                        { title: 'Exibir sugestões de adicionais', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#7f8c8d', secondary: '#dcdfe0', tertiary: '#7f8c8d' },
                icon: <ClusterOutlined />,
                title: 'Integração com Sistemas de Notificação',
                description: 'Mantenha a comunicação eficiente.',
                key: '/notification-integration',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Notificar cozinha automaticamente', type: 'switch', value: true },
                        { title: 'Notificar cliente sobre status do pedido', type: 'switch', value: true },
                        { title: 'Habilitar alertas sonoros', type: 'switch', value: false }
                    ]
                }
            },
            {
                color: { primary: '#bdc3c7', secondary: '#eff2f3', tertiary: '#bdc3c7' },
                icon: <WalletOutlined />,
                title: 'Configuração de Taxas de Entrega',
                description: 'Defina os custos com precisão.',
                key: '/delivery-fees',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Calcular taxa automaticamente', type: 'switch', value: true },
                        { title: 'Permitir retirada gratuita', type: 'switch', value: true },
                        { title: 'Definir taxa mínima de entrega', type: 'switch', value: false }
                    ]
                }
            }
        ]
    },
    {
        groupName: 'Relatórios e Análises',
        options: [
            {
                color: { primary: '#2980b9', secondary: '#d2e4f4', tertiary: '#2980b9' },
                icon: <BarChartOutlined />,
                title: 'Relatórios de Vendas',
                description: 'Monitore o desempenho comercial.',
                key: '/sales-reports',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Gerar relatórios diários', type: 'switch', value: true },
                        { title: 'Permitir exportação para CSV', type: 'switch', value: true },
                        { title: 'Enviar relatórios automaticamente', type: 'switch', value: false }
                    ]
                }
            },
            {
                color: { primary: '#2ecc71', secondary: '#d2f3e0', tertiary: '#2ecc71' },
                icon: <BarChartOutlined />,
                title: 'Relatórios de Estoque',
                description: 'Controle o fluxo de mercadorias.',
                key: '/stock-reports',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Gerar relatórios semanais', type: 'switch', value: true },
                        { title: 'Incluir produtos esgotados', type: 'switch', value: false },
                        { title: 'Permitir comparação entre períodos', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#8e44ad', secondary: '#e2d6eb', tertiary: '#8e44ad' },
                icon: <BarChartOutlined />,
                title: 'Relatórios de Pedidos',
                description: 'Avalie os padrões de consumo.',
                key: '/order-reports',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Incluir tempo médio de preparo', type: 'switch', value: true },
                        { title: 'Gerar relatórios por período', type: 'switch', value: true },
                        { title: 'Exportar para PDF', type: 'switch', value: false }
                    ]
                }
            },
            {
                color: { primary: '#f39c12', secondary: '#fbe9c9', tertiary: '#f39c12' },
                icon: <BarChartOutlined />,
                title: 'Análises de Consumo e Preferências',
                description: 'Identifique tendências e oportunidades.',
                key: '/consumption-analysis',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Analisar itens mais vendidos', type: 'switch', value: true },
                        { title: 'Gerar relatórios preditivos', type: 'switch', value: false },
                        { title: 'Exibir gráficos interativos', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#c0392b', secondary: '#f5d1cd', tertiary: '#c0392b' },
                icon: <BarChartOutlined />,
                title: 'Relatórios Personalizados',
                description: 'Crie análises sob medida para seu negócio.',
                key: '/custom-reports',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Permitir filtros avançados', type: 'switch', value: true },
                        { title: 'Salvar templates de relatórios', type: 'switch', value: true },
                        { title: 'Compartilhar relatórios com equipe', type: 'switch', value: false }
                    ]
                }
            }
        ]
    },
    {
        groupName: 'Segurança e Backup',
        options: [
            {
                color: { primary: '#e74c3c', secondary: '#f9d6d3', tertiary: '#e74c3c' },
                icon: <LockOutlined />,
                title: 'Configurações de Senhas',
                description: 'Mantenha os dados protegidos.',
                key: '/password-settings',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Exigir senha forte', type: 'switch', value: true },
                        { title: 'Solicitar troca periódica de senha', type: 'switch', value: false },
                        { title: 'Permitir recuperação de senha', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#f39c12', secondary: '#fbe9c9', tertiary: '#f39c12' },
                icon: <LockOutlined />,
                title: 'Autenticação em Duas Etapas',
                description: 'Aumente a segurança do sistema.',
                key: '/two-factor-authentication',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Ativar autenticação via SMS', type: 'switch', value: true },
                        { title: 'Permitir autenticação via app', type: 'switch', value: true },
                        { title: 'Exigir autenticação em dispositivos novos', type: 'switch', value: true }
                    ]
                }
            },
            {
                color: { primary: '#16a085', secondary: '#cdeae4', tertiary: '#16a085' },
                icon: <LockOutlined />,
                title: 'Backup Automático',
                description: 'Garanta a preservação dos seus dados.',
                key: '/automatic-backup',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Realizar backup diário', type: 'switch', value: true },
                        { title: 'Permitir backup manual', type: 'switch', value: true },
                        { title: 'Armazenar backups na nuvem', type: 'switch', value: false }
                    ]
                }
            },
            {
                color: { primary: '#7f8c8d', secondary: '#dcdfe0', tertiary: '#7f8c8d' },
                icon: <FileTextOutlined />,
                title: 'Auditoria de Atividades',
                description: 'Registre as ações dos usuários.',
                key: '/activity-audit',
                content: {
                    layout: 'list',
                    data: [
                        { title: 'Registrar alterações administrativas', type: 'switch', value: true },
                        { title: 'Notificar sobre acessos suspeitos', type: 'switch', value: true },
                        { title: 'Permitir consulta aos logs', type: 'switch', value: false }
                    ]
                }
            }
        ]
    }])

    const [filteredSettings, setFilteredSettings] = useState(settings)

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

    const selectPage = (pageKey) => {
        const page = settings.flatMap(group => group.options).find(option => option.key === pageKey)
        setSelectedOption(page || '/settings/home')
    }

    const [selectedOption, setSelectedOption] = useState(() => {
        const homePage = settings.flatMap(group => group.options).find(option => option.key === '/settings/home')
        return homePage || settings.flatMap(group => group.options)[0] || null
    })

    const selectedPage = selectedOption

    const { theme } = props

    console.log(theme) // Resolver o theme não deve ser um boolean 

    return (
        <Layout>
            <Flex vertical gap={'large'}>

                <Flex vertical gap={'large'} flex={1}>
                    <Row gutter={[16, 16]}>

                        <Col span={24}>
                            <Flex vertical gap={'middle'}>
                                <PageToolbar
                                    title={'Configurações'}
                                    description={'Gerencie de forma centralizada as principais configurações do seu sistema. Personalize informações da aplicação, controle o estoque e ajuste o cardápio digital. Otimize processos administrativos, operacionais e estratégicos do seu negócio.'}
                                    actions={null}
                                    breadcrumb={[
                                        { title: <a href={'/'}>Home</a>, },
                                        { title: <a href={window.location.href}>Configurações</a>, },
                                    ]}
                                    settings={null} />
                                <Search placeholder="Localizar uma configuração" enterButton="Buscar" onSearch={onSearch} size="large" allowClear />
                            </Flex>
                        </Col>

                        <Col span={24}>
                            <Card variant='borderless'>

                                <Splitter>
                                    <Splitter.Panel defaultSize={'32%'} min={'32%'} max={'48%'}>
                                        <Flex vertical gap={'large'} style={{ overflowY: 'auto', overflowX: "hidden", height: '73vh' }}>
                                            {filteredSettings.length > 0 ? (
                                                filteredSettings.map((setting, groupIndex) => (
                                                    <Flex vertical key={groupIndex} gap={'small'} style={{ marginBottom: '1rem' }}>
                                                        <Flex vertical>
                                                            <Paragraph style={{ margin: 0 }}>{setting.groupName}</Paragraph>
                                                        </Flex>
                                                        <Flex vertical gap={'small'} flex={1}>
                                                            {setting.options.map((option, index) => {
                                                                const isSelected = selectedOption?.key === option.key
                                                                return (
                                                                    <Card size="small" key={index} onClick={() => { selectPage(option.key) }} variant={"borderless"} style={{
                                                                        backgroundColor: (() => {
                                                                            if (isSelected) {
                                                                                return 'rgba(50, 50, 50, 0.32)'
                                                                            }
                                                                        })()
                                                                    }} hoverable>
                                                                        <Flex align={option.description.length > 64 ? "start" : "center"} gap={'middle'}>
                                                                            <Avatar style={{ backgroundColor: option.color.primary }} icon={option.icon} shape="square" size={'small'} />
                                                                            <Flex vertical flex={1}>
                                                                                <Paragraph style={{ margin: 0, wordBreak: 'keep-all', fontWeight: 'bold' }} ellipsis={{ rows: 2, expandable: false, symbol: '...' }}>{option.title}</Paragraph>
                                                                                <Paragraph type='secondary' style={{ margin: 0, wordBreak: 'keep-all' }} ellipsis={{ rows: 6, expandable: false, symbol: '...' }}>{option.description}</Paragraph>
                                                                            </Flex>
                                                                        </Flex>
                                                                    </Card>
                                                                )
                                                            }
                                                            )}
                                                        </Flex>
                                                    </Flex>
                                                ))
                                            )
                                                : (<Result status={'error'} title='Nenhuma configuração encontrada. Reinicie a página' />)}
                                        </Flex>

                                    </Splitter.Panel>
                                    <Splitter.Panel>

                                        <Flex vertical gap={'large'}>
                                            <Flex vertical gap={'small'}>
                                                <Card size="small" styles={{ body: { padding: '0 1rem 0 1rem' } }} variant="borderless" >
                                                    {selectedPage && (
                                                        <Flex vertical gap={'large'}>
                                                            <Flex vertical>
                                                                <Title level={4} style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{selectedPage.title}</Title>
                                                                <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 2, expandable: false, symbol: '...' }}>{selectedPage.description}</Paragraph>
                                                            </Flex>
                                                            <Flex vertical style={{ overflowY: 'auto', overflowX: "hidden", height: '80vh' }}>
                                                                {selectedPage?.content?.layout === 'list' && selectedPage?.content?.data.length > 0 && (
                                                                    <List dataSource={selectedPage.content.data} renderItem={(option) => (<List.Item>
                                                                        <Flex align="center" flex={1} gap={'small'}>
                                                                            <Flex vertical flex={1}>
                                                                                <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{option.title}</Paragraph>
                                                                                {option?.description ? (
                                                                                    <Paragraph type='secondary' style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{option.description}</Paragraph>) : null}
                                                                            </Flex>
                                                                            <Flex align="center">
                                                                                {
                                                                                    option.type === 'switch' ? (
                                                                                        <Switch checked={option.value} />
                                                                                    ) : option.type === 'input' ? (
                                                                                        <Input placeholder={option.input.placeholder} value={option.input.value} />
                                                                                    ) : option.type === 'select' ? (
                                                                                        <Select defaultActiveFirstOption options={option.select.items} onChange={option.select.onChange} />
                                                                                    ) : option.type === 'clickable' ? (
                                                                                        <Button type="text" icon={<RightOutlined />} size="small" />
                                                                                    ) : null
                                                                                }
                                                                            </Flex>
                                                                        </Flex>
                                                                    </List.Item>)} />
                                                                )
                                                                }
                                                            </Flex>
                                                        </Flex>
                                                    )}
                                                </Card>
                                            </Flex>
                                        </Flex>

                                    </Splitter.Panel>
                                </Splitter>
                            </Card>
                        </Col>
                    </Row>

                </Flex>
            </Flex >
        </Layout >
    )
}
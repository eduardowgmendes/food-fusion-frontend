import { Card, Flex, Layout } from "antd";
import PageToolbar from "../../components/layout/PageToolbar";

export default function HelpCenterOverview() {

    const pageToolbar = {
        title: 'Estabelecimentos',
        description: 'Gerencie seus estabelecimentos com total flexibilidade, permitindo personalizar cada local de forma independente. Ajuste informações, horários de funcionamento, cardápios e mais, garantindo que cada estabelecimento tenha uma identidade própria. Facilite o controle e a organização com ferramentas intuitivas para uma administração eficiente.',
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

    return (
        <Layout>
            <Card variant="borderless" styles={{ body: { padding: 0 } }}>
                <Flex vertical gap={'small'}>
                    <PageToolbar title={pageToolbar.title} description={pageToolbar.description} actions={null} settings={null} />
                </Flex>
            </Card>
        </Layout>
    )
}
import { Avatar, Button, Card, Flex, List, Tag, Tooltip } from "antd";
import RelativeTime from "../utils/RelativeTime";
import { AppstoreFilled, BankFilled, CarOutlined, CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, CreditCardFilled, DiffFilled, DiffOutlined, DollarCircleFilled, DotChartOutlined, EllipsisOutlined, MobileFilled, PayCircleFilled, PhoneOutlined, PictureOutlined, QrcodeOutlined, RightOutlined, ShopFilled, ShopOutlined, ShoppingCartOutlined, ShoppingFilled, ShoppingOutlined, SnippetsFilled, SolutionOutlined, SyncOutlined, UserOutlined, WalletFilled } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";

const statusConfig = {
    CREATED: { color: 'cyan', icon: <ClockCircleOutlined />, text: "Criado" },
    IN_PREPARATION: { color: "green", icon: <CheckCircleOutlined />, text: "Em Preparo" },
    READY: { color: "blue", icon: <SyncOutlined spin />, text: "Pronto" },
    DELIVERED: { color: "volcano", icon: <CarOutlined />, text: "Entregue" },
    CANCELED: { color: "red", icon: <CloseCircleOutlined />, text: "Cancelado" },
}

const paymentMethodConfig = {
    CREDIT_CARD: { color: 'orange', icon: <CreditCardFilled />, text: "Cartão de Crédito" },
    DEBIT_CARD: { color: 'purple', icon: <CreditCardFilled />, text: "Cartão de Débito" },
    BANK_TRANSFER: { color: 'yellow', icon: <BankFilled />, text: "Transferência Bancária" },
    CASH: { color: 'green', icon: <DollarCircleFilled />, text: "Dinheiro" },
    DIGITAL_WALLET: { color: 'red', icon: <WalletFilled />, text: "Carteira Digital" },
    PIX: { color: 'blue', icon: <QrcodeOutlined />, text: "Pix" },
    MOBILE_PAYMENT: { color: 'lime', icon: <MobileFilled />, text: "Pagamento Móvel" },
    CRYPTO_CURRENCY: { color: 'gold', icon: <PayCircleFilled />, text: "Criptomoeda" },
}

export const dashboardOrdersTableColumnDefault = [
    {
        title: "#",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => a.id - b.id
    },
    {
        title: 'Estabelecimento',
        dataIndex: "establishment",
        key: "establishment",
        fixed: 'left',
        sorter: (a, b) => a.establishment.name.localeCompare(b.establishment.name),
        render: (establishment) => (
            <Flex align="center" gap={'small'}>
                <Avatar size={'small'} icon={<ShopFilled />} />
                <Flex vertical>
                    <Tooltip title={establishment.name}>
                        <Paragraph style={{ margin: 0, maxWidth: '12ch' }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{establishment.name}</Paragraph>
                    </Tooltip>
                </Flex>
            </Flex>
        )
    },
    {
        title: 'Cliente',
        dataIndex: "client",
        key: "client",
        fixed: 'left',
        sorter: (a, b) => a.customer.firstName.localeCompare(b.customer.firstName),
        render: (client) => (
            <Flex align="center" gap={'small'}>
                <Avatar size={'small'} icon={<UserOutlined />} />
                <Flex vertical>
                    <Tooltip title={client}>
                        <Paragraph style={{ margin: 0, maxWidth: '12ch' }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{client}</Paragraph>
                    </Tooltip>
                </Flex>
            </Flex>
        )
    },
    {
        title: 'Status',
        dataIndex: "status",
        key: "status",
        filters: Object.entries(statusConfig).map(([value, { text }]) => ({ text, value })),
        filterMode: "tree",
        filterSearch: true,
        onFilter: (value, record) => record.status === value,
        render: (status) => {
            const { color, icon, text } = statusConfig[status] || {}
            return <Tag color={color} icon={icon}>{text || status}</Tag>
        },
    },
    {
        title: "Moeda",
        dataIndex: "currency",
        key: "currency"
    },
    {
        title: "Pagamento",
        dataIndex: "paymentMethod",
        key: "paymentMethod",
        filters: Object.entries(paymentMethodConfig).map(([value, { text }]) => ({ text, value })),
        filterMode: "tree",
        filterSearch: true,
        onFilter: (value, record) => record.paymentMethod === value,
        render: (paymentMethod) => {
            const { color, icon, text } = paymentMethodConfig[paymentMethod] || {}
            return <Tag color={color} icon={icon}>{text}</Tag>
        }
    },
    {
        title: "Total",
        dataIndex: "total",
        key: "total",
        fixed: 'right',
        render: (price, record) => (
            <Flex align="center" gap={'small'}>
                <Paragraph style={{ margin: 0, wordBreak: "keep-all" }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{record.currency === 'BRL' ? 'R$' : "$"}</Paragraph>
                <Paragraph style={{ margin: 0, flex: 1, wordBreak: "keep-all" }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{price}</Paragraph>
            </Flex >)
    },
    {
        title: "Quando",
        dataIndex: "createdAt",
        key: "createdAt",
        fixed: 'right',
        render: (createdAt) => RelativeTime.formatDateTime(createdAt),
        sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    }
]

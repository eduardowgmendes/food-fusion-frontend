import { CheckCircleOutlined, ClockCircleFilled, CloseCircleOutlined } from "@ant-design/icons";
import RelativeTime from "../utils/RelativeTime";
import { Tag } from "antd";

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

const statusConfig = {
    INACTIVE: { color: 'red', text: 'Inativo', icon: <CloseCircleOutlined /> },
    ACTIVE: { color: 'green', text: 'Ativo', icon: <CheckCircleOutlined /> }
}


export const establishmentTableColumns = [
    {
        title: "#",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => a.id - b.id
    },
    {
        title: "Nome",
        dataIndex: "name",
        key: "name",
        fixed: 'left',
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
        title: "Culinária de Origem",
        dataIndex: "type",
        key: "type",
        fixed: 'left',
        filters: Object.entries(typeConfig).map(([value, { text }]) => ({ text, value })),
        filterMode: "tree",
        filterSearch: true,
        onFilter: (value, record) => record.type === value,
        render: (type) => {
            const { text, flag } = typeConfig[type] || {}
            return <Tag>{`${flag} ${text}` || type}</Tag>
        }
    },
    {
        title: "Status",
        dataIndex: "deleted",
        key: "deleted",
        filters: Object.entries(statusConfig).map(([value, { text }]) => ({ text, value })),
        filterMode: "tree",
        filterSearch: true,
        onFilter: (value, record) => {
            const status = record.deleted ? "INACTIVE" : "ACTIVE"
            return status === value
        },
        render: (deleted) => {
            const status = deleted ? "INACTIVE" : "ACTIVE"
            const { color, icon, text } = statusConfig[status] || {}
            return <Tag color={color} icon={icon}>{text || value}</Tag>
        }
    },
    {
        title: "Criado",
        dataIndex: "createdAt",
        key: "createdAt",
        fixed: 'right',
        render: (createdAt) => RelativeTime.formatDateTime(createdAt),
        sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    },
    {
        title: "Modificado",
        dataIndex: "updatedAt",
        key: "updatedAt",
        fixed: 'right',
        render: (updatedAt) => updatedAt ? RelativeTime.formatDateTime(updatedAt) : 'Nunca',
        sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
    }
];

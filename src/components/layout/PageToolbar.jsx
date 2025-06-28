import { MoreOutlined, ShopFilled, ShopOutlined, ShopTwoTone } from "@ant-design/icons";
import { Avatar, Breadcrumb, Button, Card, Col, Flex, Grid, Row, Select, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const { useBreakpoint } = Grid

export default function PageToolbar({ title, description, actions, breadcrumb, settings }) {

    const screens = useBreakpoint()

    const handleChange = value => {
        console.log(`selected: ${value}`)
    }

    return (
        <Card variant="borderless" styles={{ body: { padding: 0 } }} style={{ padding: '1rem 0 2rem 0', background: 'transparent', boxShadow: 'none' }}>

            <Flex align="center" gap={screens.xs ? 'small' : 'middle'}>

                <Flex vertical gap={'small'} flex={1}>

                    <Flex align="center" justify="space-between" gap={'large'} flex={1}>

                        <Flex vertical gap={'small'} flex={1}>
                            <Breadcrumb items={breadcrumb} />
                            <Title level={screens.xs ? 4 : 2} style={{ margin: 0, wordBreak: "keep-all" }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{title}</Title>
                        </Flex>

                        <Flex align="center" justify="space-between" gap={screens.xs ? 'small' : 'middle'}>

                            {actions ? (
                                <Flex align="center" gap={'small'}>
                                    {actions.map((action, index) => (
                                        action.type === 'button' ?
                                            <Tooltip title={action?.button?.tooltip}>
                                                <Button
                                                    key={index}
                                                    size={screens.xs ? 'small' : action?.button?.size}
                                                    type={screens.xs ? 'text' : action?.button?.type}
                                                    color={action?.button?.color}
                                                    icon={action?.button?.icon}
                                                    variant={screens.xs ? 'outlined' : action?.button?.variant}
                                                    disabled={action?.button?.disabled}
                                                    onClick={action?.button?.onClick}>
                                                    {screens.xs ? null : action?.button?.label}
                                                </Button>
                                            </Tooltip>
                                            :
                                            action.type === 'select' ?
                                                <Tooltip title={action?.select?.tooltip}>
                                                    <Select
                                                        style={{ width: 128 }}
                                                        key={index}
                                                        placeholder={action?.select?.tooltip ? action?.select?.tooltip : null}
                                                        size={screens.xs ? 'small' : action?.select?.size}
                                                        defaultValue={action?.select?.defaultValue}
                                                        onChange={action?.select?.onChange}
                                                        disabled={action?.select?.disabled}
                                                        options={action?.select?.options}
                                                    />
                                                </Tooltip>
                                                : null
                                    ))}
                                </Flex>) : null}

                            {settings ? (<Tooltip title='Configurações'>
                                <Button type="text" shape="square" size="large" icon={<MoreOutlined />} />
                            </Tooltip>) : (null)}

                        </Flex>

                    </Flex>

                    {description && (<Paragraph type="secondary" style={{ margin: 0, wordBreak: "keep-all" }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{description}</Paragraph>)}

                </Flex>

            </Flex>

        </Card>
    )
}
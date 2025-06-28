import { LoadingOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Flex, Grid, Select, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";

const { useBreakpoint } = Grid

export default function Section({ icon, title, description, helper, actions, contents }) {

    const [loading, setLoading] = useState(true)
    const [loadedContents, setLoadedContents] = useState(null)

    const screens = useBreakpoint();

    useEffect(() => {
        if (typeof contents?.then === "function") {
            setLoading(true);
            contents.then(data => {
                setLoadedContents(data);
                setLoading(false);
            });
        } else {
            setLoadedContents(contents);
            setLoading(false);
        }
    }, [contents]);

    return (
        <section>

            <Flex vertical gap={'large'} flex={1}>

                <Flex vertical >

                    <Flex vertical={screens.xs} gap={'small'} align={screens.xs ? "stretch" : "center"}>
                        <Flex align="start" gap={'middle'} flex={1}>

                            {icon ? icon : null}

                            <Flex vertical flex={1}>
                                <Title style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }} level={4}>{title}</Title>
                                {description && <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{description}</Paragraph>}
                            </Flex>

                            <Flex align="center" gap={'small'} wrap>
                                {actions ? (
                                    <Flex align="center" gap={'small'} flex={1}>
                                        {actions.map((action, index) => (
                                            action.type === 'button' ?
                                                <Tooltip title={action?.button?.tooltip}>
                                                    <Button
                                                        key={index}
                                                        size={screens.xs ? 'small' : action?.button?.size}
                                                        type={screens.xs ? 'text' : action?.button?.type}
                                                        color={action?.button?.color}
                                                        icon={action?.button?.icon}
                                                        variant={action?.button?.variant}
                                                        disabled={action?.button?.disabled}
                                                        onClick={action?.button?.onClick}>
                                                        {screens.xs ? null : action?.button?.label}
                                                    </Button>
                                                </Tooltip>
                                                :
                                                action.type === 'select' ?
                                                    <Tooltip title={action?.select?.tooltip}>
                                                        <Select
                                                            style={{ width: '100%' }}
                                                            key={index}
                                                            placeholder={action?.select?.tooltip ? action?.select?.tooltip : null}
                                                            size={action?.select?.size}
                                                            defaultValue={action?.select?.defaultValue}
                                                            onChange={action?.select?.onChange}
                                                            disabled={action?.select?.disabled}
                                                            options={action?.select?.options}
                                                        />
                                                    </Tooltip>
                                                    : null
                                        ))}
                                    </Flex>) : null}
                            </Flex>

                            {helper ?
                                <Tooltip title={helper.tooltip}>
                                    <Button type="text" style={{ margin: 0 }} icon={<QuestionCircleOutlined style={{ color: "gray" }} />} size="small" />
                                </Tooltip> : null}

                        </Flex>

                    </Flex>

                </Flex>

                <Flex vertical flex={1} gap={'large'}>

                    {loading ? (
                        <Flex vertical align="center" justify="center" gap={'small'} flex={1} style={{ minHeight: '50vh' }}>
                            <LoadingOutlined style={{ fontSize: '3rem', color: 'steelblue' }} />
                            <Paragraph type="secondary" style={{ margin: 0, wordBreak: "keep-all" }}>Carregando dados...</Paragraph>
                        </Flex>
                    ) : (loadedContents)}

                </Flex>

            </Flex>

        </section>
    )
}
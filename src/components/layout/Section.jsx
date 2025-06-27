import { LoadingOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";

export default function Section({ icon, title, description, helper, contents }) {

    const [loading, setLoading] = useState(true)
    const [loadedContents, setLoadedContents] = useState(null)

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

                    <Flex gap={'small'} align="center">

                        {icon ? icon : null}

                        <Flex vertical flex={1}>
                            <Title style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }} level={4}>{title}</Title>
                        </Flex>

                        {helper ?
                            <Tooltip title={helper.tooltip}>
                                <Button type="text" style={{ margin: 0 }} icon={<QuestionCircleOutlined style={{ color: "gray" }} />} size="small" />
                            </Tooltip> : null}

                    </Flex>

                    {description && <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{description}</Paragraph>}

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
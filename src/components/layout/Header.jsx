import { Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function Header(props) {

    const title = props?.title
    const description = props?.description
    const headerSettings = props?.settings

    return (
        <Flex vertical gap={headerSettings.textGap ? headerSettings.textGap : null}>
            <Title ellipsis={headerSettings?.titleEllipsis}>{title}</Title>
            <Paragraph ellipsi={headerSettings?.paragraphEllipsis}>{description}</Paragraph>
        </Flex>
    )
}
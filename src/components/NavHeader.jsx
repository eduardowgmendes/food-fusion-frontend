import { Button, Flex, Grid, Image, Row } from "antd";

export default function NavHeader({ logoSrc, menuItems }) {
    return (
        <Flex gap={'large'} align="center" justify="center" wrap>

            <Image preview={false} src={logoSrc} width={48} />

            <Flex align="center" justify="center" gap={'small'} wrap>
                {menuItems.map((menuItem, index) => (
                    <Button key={index} href={menuItem.href} type="link" size="small">{menuItem.title}</Button>
                ))}
            </Flex>

        </Flex>
    )
}
import { AppstoreAddOutlined, CheckCircleFilled, ClockCircleOutlined, CloseCircleFilled, DeleteOutlined, EditOutlined, EyeFilled, EyeInvisibleOutlined, IdcardOutlined, InfoCircleOutlined, InfoOutlined, LineChartOutlined, MailOutlined, MenuFoldOutlined, MenuOutlined, MoonFilled, PhoneOutlined, PlayCircleOutlined, PlusOutlined, PushpinFilled, PushpinOutlined, QuestionCircleOutlined, RedEnvelopeFilled, RedEnvelopeOutlined, RightCircleFilled, RightCircleTwoTone, RightOutlined, ShopOutlined, SunFilled, UpOutlined, WarningFilled, WarningOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Card, Col, Descriptions, Flex, Grid, Layout, List, Modal, Result, Row, Space, Table, Tabs, Tag, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import establishments from '../../local/establishments.json'
import Section from "../layout/Section";

const { useBreakpoint } = Grid

export default function SimpleTable({ columns, dataSource, bordered }) {

    const screens = useBreakpoint()

    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const selectedEstablishment = selectedItem ? establishments.find(est => est.id === selectedItem.id) : null;

    const menus = selectedEstablishment?.menus || [];
    const addresses = selectedEstablishment?.addresses || [];
    const contacts = selectedEstablishment?.phones || [];
    const inventory = selectedEstablishment?.stock || [];

    const handleRowClick = (record) => {
        const establishment = establishments.find(est => est.id === record.id);
        setSelectedItem(establishment);
        setModalVisible(true);
    };

    return (
        <>
            <Table
                bordered={bordered !== null ? bordered : false}
                onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                })}
                rowKey="id"
                size={screens.xs ? 'small' : 'large'}
                dataSource={dataSource}
                columns={columns}
                style={{ width: '100%' }}
            />

            <Modal width={'50vw'} open={modalVisible} title='Detalhes do Estabelecimento' onCancel={() => setModalVisible(false)} cancelText='Cancelar' onOk={() => setModalVisible(false)} okText="Fechar">

                {selectedItem && (
                    <Flex vertical gap={'small'}>
                        <Card variant="outlined"
                            styles={{ body: { padding: 0 } }}
                            title={
                                selectedItem.status === 'Ativo' ?
                                    <Space align="center" direction="horizontal" size={'small'} >
                                        <CheckCircleFilled style={{ color: 'springgreen' }} />
                                        <Paragraph ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{selectedItem.status}</Paragraph>
                                    </Space>
                                    :
                                    <Space align="center" direction="horizontal" size={'small'}>
                                        <WarningFilled style={{ color: 'gold' }} />
                                        <Paragraph ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{selectedItem.status}</Paragraph>
                                        <Alert type="warning" message='Seu estabelecimento está inativo.' />
                                    </Space>
                            }
                            extra={
                                selectedItem.status === 'Ativo' ?
                                    <Flex align="center" gap={'small'}>
                                        <Button type="default" shape="square" icon={<EditOutlined />} >Editar</Button>
                                        <Button type="default" danger shape="square" icon={<DeleteOutlined />} />
                                    </Flex> : <Flex align="center" gap={'small'}>
                                        <Button type="default" danger shape="square" icon={<EyeFilled />}>Ativar</Button>
                                        <Button type="default" shape="square" icon={<EditOutlined />} >Editar</Button>
                                        <Button type="default" danger shape="square" icon={<DeleteOutlined />} />
                                    </Flex>
                            }>

                            <Card variant="borderless" styles={{ body: { padding: 0 } }}>
                                <Card variant="borderless" styles={{ body: { padding: 0 } }} style={{ backgroundSize: 'cover', backgroundPosition: 'end', backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/uploads/bananas.png)' }}>
                                    <Flex align="start" gap={'large'} style={{ padding: '1rem', background: 'rgba(0, 0, 0, .5)', backgroundBlendMode: 'darken' }}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                                                <Flex align="center" gap={'large'}>

                                                    <Avatar size={128} icon={<ShopOutlined />} shape="square" />

                                                    <Flex vertical align="start" flex={1} >
                                                        <Tag>{selectedItem.type}</Tag>
                                                        <Title style={{ margin: 0 }} level={2}>{selectedItem.name}</Title>
                                                        <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: true, symbol: 'Ver mais' }}>{selectedItem.description}</Paragraph>
                                                    </Flex>
                                                </Flex>
                                            </Col>

                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>

                                            </Col>
                                        </Row>
                                    </Flex>
                                </Card>

                                <Flex gap={'small'} justify="stretch" style={{ padding: '1rem' }}>
                                    <Tabs style={{ width: '100%' }} defaultActiveKey="1" items={[
                                        {
                                            key: '1', label: 'Perfil', children:
                                                <Flex vertical gap={'small'}>

                                                    <Section title={'Bio'} description={'Visualize dados básicos do seu estabelecimento'} helper={{ tooltip: 'Visualize dados básicos do seu estabelecimento' }} contents={
                                                        <Flex vertical gap={'large'}>

                                                            <Flex vertical>
                                                                <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>Nome</Paragraph>
                                                                <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{selectedEstablishment?.name}</Paragraph>
                                                            </Flex>

                                                            <Flex vertical>
                                                                <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>Tipo</Paragraph>
                                                                <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{selectedEstablishment?.type}</Paragraph>
                                                            </Flex>

                                                            <Flex vertical>
                                                                <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>Descrição</Paragraph>
                                                                <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: true, symbol: 'Ver mais' }}>{selectedEstablishment?.description}</Paragraph>
                                                            </Flex>

                                                        </Flex>
                                                    } />

                                                    <Section
                                                        title={'Horários de Atendimento'}
                                                        description={'Defina os horários de atendimento para garantir que os clientes saibam quando seus serviços estão disponíveis.'}
                                                        helper={{ tooltip: 'Configure os dias e horários em que você estará disponível para atender seus clientes. Inclua pausas, dias de folga e horários especiais para refletir a realidade do seu atendimento.' }}
                                                        contents={
                                                            selectedEstablishment?.serviceTimes && selectedEstablishment.serviceTimes.length > 0 ?
                                                                <List style={{ width: '100%' }} dataSource={selectedEstablishment.serviceTimes} renderItem={(serviceTime) => (

                                                                    <List.Item>

                                                                        <Flex align="center" gap={'small'} style={{ width: '100%' }}>

                                                                            <Flex align="center" flex={1}>
                                                                                <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{serviceTime.name}</Paragraph>
                                                                            </Flex>

                                                                            <Flex align="center" gap={'large'}>

                                                                                <Flex align="center" gap={'small'}>
                                                                                    <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Abre</Paragraph>
                                                                                    <Tag>{serviceTime?.opensAt}</Tag>
                                                                                </Flex>

                                                                                <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>|</Paragraph>

                                                                                <Flex align="center" gap={'small'} >
                                                                                    <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>Fecha</Paragraph>
                                                                                    <Tag>{serviceTime?.closesAt}</Tag>
                                                                                </Flex>

                                                                            </Flex>

                                                                        </Flex>
                                                                    </List.Item>
                                                                )} /> : <Result icon={<ClockCircleOutlined />} status={'secondary'} title='Nenhum horário de atendimento cadastrado no momento.' subTitle='Adicione quantos horários desejar para organizar o atendimento do seu estabelecimento.' extra={[
                                                                    <Button key="no-service-times-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo Horário de Atendimento</Button>
                                                                ]} />
                                                        } />
                                                </Flex>

                                        },
                                        {
                                            key: '2', label: 'Menus', children:
                                                <Flex vertical={screens.xs} align={'center'} gap={'large'}>
                                                    <Row gutter={[16, 16]}>

                                                        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>

                                                            <Section title={'Menus'} description={'Registre todos os endereços relacionados ao novo estabelecimento. Adicione quantos endereços forem necessários, identificando cada um de acordo com sua finalidade.'} helper={{ tooltip: 'Registre todos os endereços relacionados ao novo estabelecimento. Adicione quantos endereços forem necessários, identificando cada um de acordo com sua finalidade.' }} contents={
                                                                <Flex align="center" gap={'large'}>
                                                                    {selectedEstablishment?.menus && selectedEstablishment.menus.length > 0 ?
                                                                        <Card title={
                                                                            <Flex align="center" gap={'large'}>

                                                                                <Flex flex={1} align="center" justify="start" >
                                                                                    <Paragraph style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{`Quantidade: ${selectedEstablishment.menus.length}`}</Paragraph>
                                                                                </Flex>
                                                                                <Flex gap={'small'}>
                                                                                    <Button type="default" danger shape="square" icon={<DeleteOutlined />} />
                                                                                    <Button type="default" shape="square" icon={<PlusOutlined />} />
                                                                                </Flex>
                                                                            </Flex>} bodyStyle={{ padding: 0 }} style={{ width: '100%' }}>
                                                                            <List style={{ maxHeight: '30vh', overflowY: 'auto', overflowX: 'hidden' }} dataSource={selectedEstablishment.menus} renderItem={(menu) => (
                                                                                <List.Item style={{ padding: '1rem 1.5rem 1rem 1.5rem' }}>
                                                                                    <Flex vertical flex={1}>
                                                                                        <Title level={5} style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: true, symbol: 'Ver mais' }}>{menu.name}</Title>
                                                                                        <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: true, symbol: 'Ver mais' }}>{menu.description}</Paragraph>
                                                                                    </Flex>
                                                                                </List.Item>
                                                                            )} />
                                                                        </Card>
                                                                        : <Result icon={<MenuFoldOutlined />} status={'secondary'} title='Nenhum menu cadastrado' subTitle='Registre todos os endereços relacionados ao novo estabelecimento. Adicione quantos endereços forem necessários, identificando cada um de acordo com sua finalidade.' extra={[
                                                                            <Button key="no-menus-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo Menu</Button>
                                                                        ]} />}
                                                                </Flex>} />
                                                        </Col>

                                                        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>

                                                            <Section title={'Cardápio Digital'} description={'Permita que seus clientes explorem suas opções de pratos e bebidas de forma prática e moderna com um cardápio digital. Adicione descrições, preços e imagens para criar uma experiência interativa e atraente.'} helper={{ tooltip: 'Crie e organize seu cardápio digital para facilitar a escolha dos clientes. Inclua informações detalhadas, como ingredientes, preços e promoções, para destacar seus melhores pratos.' }} contents={
                                                                <Result style={{ width: '100%' }} icon={<MenuOutlined />} status={'secondary'} title='Nenhum cardápio cadastrado' subTitle='Crie e organize seu cardápio digital para facilitar a escolha dos clientes. Inclua informações detalhadas, como ingredientes, preços e promoções, para destacar seus melhores pratos.' extra={[
                                                                    <Button key="no-menus-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo Cardápio</Button>
                                                                ]} />} />
                                                        </Col>
                                                    </Row>

                                                </Flex>
                                        },
                                        {
                                            key: '3', label: 'Endereços', children:
                                                <Flex>
                                                    {selectedEstablishment?.adddresses && selectedEstablishment.addresses.length > 0 ?
                                                        <Flex>
                                                            <List dataSource={selectedEstablishment.adddresses} renderItem={(address) => (
                                                                <List.Item>
                                                                    <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'Ver mais' }}>{`${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state} - ${address.country} | ${address.zipcode}`}</Paragraph>
                                                                </List.Item>
                                                            )} />
                                                        </Flex> :
                                                        <Result style={{ width: '100%' }} icon={<PushpinOutlined />} status={'seconary'} title='Nenhum Endereço cadastrado' subTitle='Registre todos os endereços relacionados ao novo estabelecimento. Adicione quantos endereços forem necessários, identificando cada um de acordo com sua finalidade.' extra={[
                                                            <Button key="no-address-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo Endereço</Button>
                                                        ]} />}
                                                </Flex>
                                        },
                                        {
                                            key: '4',
                                            label: 'Contatos', children:
                                                < Flex align="center">
                                                    <Row gutter={[16, 16]}>
                                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                            {selectedEstablishment?.phones && selectedEstablishment.phones.length > 0 ?
                                                                <Section title={'Telefones'} description={'Adicione os números de telefone para contato, permitindo que seus clientes se comuniquem facilmente com você. Inclua linhas diretas, celulares e números de atendimento ao cliente, se necessário.'} helper={{ tooltip: 'Insira os números de telefone que seus clientes podem usar para entrar em contato. Lembre-se de incluir o código do país, se necessário.' }} contents={<Flex>
                                                                    <List dataSource={selectedEstablishment.phones} renderItem={(phone) => (
                                                                        <List.Item>
                                                                            <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'Ver mais' }}>{`(${phone.prefix}) ${phone.phoneNumber}`}</Paragraph>
                                                                        </List.Item>
                                                                    )} />
                                                                </Flex>} /> : <Result icon={<PhoneOutlined />} status={'secondary'} title='Nenhum Telefone cadastrado' subTitle='Adicione os números de telefone para contato, permitindo que seus clientes se comuniquem facilmente com você. Inclua linhas diretas, celulares e números de atendimento ao cliente, se necessário.' extra={[
                                                                    <Button key="no-phones-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo Telefone</Button>
                                                                ]} />}
                                                        </Col>
                                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                            {selectedEstablishment?.emails && selectedEstablishment.emails.length > 0 ?
                                                                <Section title={'E-mails'} description={'Cadastre os endereços de email para comunicação com seus clientes. Utilize e-mails profissionais para uma experiência de atendimento mais confiável e organizada.'} helper={{ tooltip: 'Insira os endereços de email que serão utilizados para receber mensagens de clientes. Você pode adicionar múltiplos e-mails para diferentes finalidades, como atendimento, suporte ou vendas.' }} contents={<Flex>
                                                                    <List dataSource={selectedEstablishment.emails} renderItem={(email) => (
                                                                        <List.Item>
                                                                            <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'Ver mais' }}>{`${address.email}`}</Paragraph>
                                                                        </List.Item>
                                                                    )} />
                                                                </Flex>} /> : <Result icon={<MailOutlined />} status={'secondary'} title='Nenhum E-mail cadastrado' subTitle='Insira os endereços de email que serão utilizados para receber mensagens de clientes. Você pode adicionar múltiplos e-mails para diferentes finalidades, como atendimento, suporte ou vendas.' extra={[
                                                                    <Button key="no-emails-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo E-mail</Button>
                                                                ]} />}
                                                        </Col>
                                                    </Row>
                                                </Flex>
                                        },
                                        {
                                            key: '5', label: 'Estoque', children:
                                                <Result icon={<AppstoreAddOutlined />} status={'secondary'} title='Nenhum Estoque cadastrado' subTitle='Registre todos os endereços relacionados ao novo estabelecimento. Adicione quantos endereços forem necessários, identificando cada um de acordo com sua finalidade.' extra={[
                                                    <Button key="no-inventory-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo Estoque</Button>
                                                ]} />
                                        }
                                    ]} />
                                </Flex>
                            </Card>
                        </Card>
                    </Flex>
                )}

            </Modal >
        </>
    )
}

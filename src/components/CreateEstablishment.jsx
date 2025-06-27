import { BarsOutlined, CheckOutlined, ClockCircleOutlined, DeleteFilled, EditFilled, EyeFilled, FormOutlined, LeftOutlined, MenuFoldOutlined, MoonFilled, PictureOutlined, PlusOutlined, PushpinOutlined, RightOutlined, ShopOutlined, SunFilled } from "@ant-design/icons";
import { Alert, Avatar, Button, Card, Checkbox, DatePicker, Flex, Form, Input, Layout, List, Result, Select, Skeleton, Steps, TimePicker, Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import Section from "./layout/Section";
import dayjs from "dayjs";

export default function CreateEstablishment({ onCancel }) {

    const [form] = Form.useForm()

    const [newEstablishment, setNewEstablishment] = useState({
        name: null,
        description: null,
        type: { code: null, description: null, flag: null },
        menus: null,
        addresses: null,
        emails: null,
        serviceTimes: null,
        phones: null
    })

    const cuisineTypes = [
        { code: 1, description: "Italiana", flag: "🇮🇹" },
        { code: 2, description: "Japonesa", flag: "🇯🇵" },
        { code: 3, description: "Tailandesa", flag: "🇹🇭" },
        { code: 4, description: "Chinesa", flag: "🇨🇳" },
        { code: 5, description: "Mexicana", flag: "🇲🇽" },
        { code: 6, description: "Indiana", flag: "🇮🇳" },
        { code: 7, description: "Americana", flag: "🇺🇸" },
        { code: 8, description: "Francesa", flag: "🇫🇷" },
        { code: 9, description: "Brasileira", flag: "🇧🇷" },
        { code: 10, description: "Mediterrânea", flag: "🌊" },
        { code: 11, description: "Espanhola", flag: "🇪🇸" },
        { code: 12, description: "Grega", flag: "🇬🇷" },
        { code: 13, description: "Coreana", flag: "🇰🇷" },
        { code: 15, description: "Vietnamita", flag: "🇻🇳" },
        { code: 16, description: "Turca", flag: "🇹🇷" },
        { code: 17, description: "Árabe", flag: "🇸🇦" }
    ];

    const [current, setCurrent] = useState(0)

    const [isDone, setIsDone] = useState(false)
    const [isCancelling, setCancelling] = useState(false)

    useEffect(() => {
        form.setFieldsValue(newEstablishment)
    }, [current])

    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")

    const validateRequiredFields = () => {
        const missingFields = []

        if (!newEstablishment.name) {
            missingFields.push("Nome do Estabelecimento")
        }

        if (!newEstablishment.type) {
            missingFields.push("Culinária de Origem")
        }

        if (missingFields.length > 0) {
            setAlertMessage(`Por favor, preencha os seguintes campos obrigatórios: ${missingFields.join(", ")}.`)
            setShowAlert(true)
            return false
        }

        setShowAlert(false)
        return true
    }

    const formatKey = (key) => {
        const labels = {
            name: "Nome do Estabelecimento",
            description: "Descrição",
            type: "Tipo do Estabelecimento",
            menus: "Menus",
            addresses: "Endereços",
            serviceTimes: "Horários de Atendimento",
            emails: "E-mails",
            phones: "Telefones"
        };
        return labels[key] || key;
    };


    const options = cuisineTypes.map(type => ({
        value: type.code,
        label: `${type.flag} ${type.description}`
    }))

    const steps = [
        {
            title: 'Perfil',
            content:
                <Flex vertical gap={'small'} style={{ height: '75vh', width: '100%', overflowY: 'auto', overflowX: 'hidden' }} >

                    {showAlert && (
                        <Alert type="error" message={alertMessage} showIcon banner closable onClose={() => setShowAlert(false)} />
                    )}

                    <Section icon={<PictureOutlined style={{ color: "steelblue", fontSize: '1.5rem' }} />} title={'Aparência'} description={'Personalize a identidade visual do seu estabelecimento ajustando a logo e as cores. Essa configuração será aplicada como tema no cardápio digital.'} helper={{ tooltip: 'Personalize a identidade visual do seu estabelecimento ajustando a logo e as cores. Essa configuração será aplicada como tema no cardápio digital.' }} contents={

                        <Flex style={{ width: '100%' }}>

                            <Card styles={{ body: { padding: 0 } }} style={{ width: '100%', backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/uploads/bananas.png)' }}>

                                <Flex vertical style={{ position: 'relative', background: 'rgba(0, 0, 0, .5)', backgroundBlendMode: 'darken' }}>

                                    <Flex justify="end" style={{ padding: '.5rem', position: 'absolute', right: 0 }}>

                                        <Tooltip title='Trocar imagem de capa'>

                                            <Button icon={<FormOutlined />} type="text" />

                                        </Tooltip>

                                    </Flex>

                                    <Flex align="center" gap={'large'} style={{ padding: '1rem' }}>

                                        <Card styles={{ body: { padding: '.5rem', position: 'relative' } }} className="glow">

                                            <Avatar size={128} shape="square" icon={<ShopOutlined />} />

                                            <Flex justify="end" style={{ position: 'absolute', margin: '.5rem', top: 0, right: 0 }}>

                                                <Tooltip title='Trocar logo'>

                                                    <Button icon={<FormOutlined />} type="text" />

                                                </Tooltip>

                                            </Flex>

                                        </Card>

                                        <Skeleton style={{ maxWidth: '50%' }} />

                                    </Flex>

                                </Flex>

                            </Card>

                        </Flex>
                    } />

                    <Section icon={<ShopOutlined style={{ color: "steelblue", fontSize: '1.5rem' }} />} title={'Dados do Estabelecimento'} description={'Informações essenciais do estabelecimento, como nome, endereço e contato.'} helper={{ tooltip: 'Informações essenciais do estabelecimento, como nome, endereço e contato' }} contents={

                        <Form form={form}>

                            <Form.Item layout="vertical" label='Nome do Estabelecimento' name={'name'} rules={[{ required: true }]} style={{ minHeight: 92 }}>
                                <Input size="large" placeholder="Ex. Restaurante do Seu José" variant="outlined" onChange={(e) => setNewEstablishment(prev => ({ ...prev, name: e.target.value }))} />
                            </Form.Item>

                            <Form.Item layout="vertical" label="Descrição" style={{ minHeight: 175 }}>
                                <TextArea size="large" placeholder="Digite uma breve descrição sobre o seu estabelecimento, serviços ou diferenciais." onChange={(e) => setNewEstablishment(prev => ({ ...prev, description: e.target.value }))} variant="outlined" rows={4} />
                            </Form.Item>

                            <Form.Item layout="vertical" label='Culinária de Origem' name={'type'} rules={[{ required: true }]} style={{ minHeight: 92 }}>
                                <Select size="large" placeholder='Escolha a nacionalidade da cozinha' options={options} onChange={(value) => setNewEstablishment(prev => ({ ...prev, type: value }))} />
                            </Form.Item>

                            <Form.Item layout="vertical" label='Fundado em' style={{ minHeight: 92 }}>
                                <Flex gap={'small'} align="center">
                                    <DatePicker size="large" placeholder="1991-03-24" variant="outlined" />
                                    <Checkbox checked={false}>
                                        Exibir no Perfil
                                    </Checkbox>
                                </Flex>
                            </Form.Item>

                            <Form.Item>

                                <Section icon={<PushpinOutlined />} title='Endereços' helper={{ tooltip: '' }} contents={

                                    <Card>

                                        <Flex vertical style={{ height: newEstablishment.addresses && newEstablishment.addresses.length > 5 ? '50vh' : 'auto', overflowY: 'auto', overflowX: 'hidden' }}>

                                            {newEstablishment.addresses ?
                                                <List dataSource={newEstablishment.addresses} renderItem={(address) => (

                                                    <List.Item>

                                                        <Flex align="center" gap={'small'} style={{ padding: '1rem 0 1rem 0', width: '100%' }}>

                                                            <Flex vertical justify="center" flex={1}>
                                                                <Title level={5} style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{newEstablishment.addresses.name}</Title>
                                                                < Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{
                                                                    address.street.concat(' ')
                                                                        .concat(address.number)
                                                                        .concat(', ')
                                                                        .concat(address.neighborhood)
                                                                        .concat(' - ')
                                                                        .concat(address.city)
                                                                        .concat(' - ')
                                                                        .concat(address.state)
                                                                        .concat(' - ')
                                                                        .concat(address.zipcode)}</Paragraph>
                                                            </Flex>

                                                            <Flex align="center" gap={'small'}>

                                                                <Tooltip title='Editar'>
                                                                    <Button icon={<EditFilled />} type="text" shape="circle" />
                                                                </Tooltip>

                                                                <Tooltip title='Deletar'>
                                                                    <Button style={{ color: 'tomato' }} icon={<DeleteFilled />} type="text" shape="circle" />
                                                                </Tooltip>

                                                                <Tooltip title='Visualizar'>
                                                                    <Button icon={<EyeFilled />} type="text" shape="circle" />
                                                                </Tooltip>

                                                            </Flex>

                                                        </Flex>

                                                    </List.Item>
                                                )} />
                                                :
                                                <Result icon={<PushpinOutlined />} status={'info'} title='Nenhum endereço cadastrado' subTitle='Registre todos os endereços relacionados ao novo estabelecimento. Adicione quantos endereços forem necessários, identificando cada um de acordo com sua finalidade.' extra={[
                                                    <Button key="no-address-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo Endereço</Button>
                                                ]} />
                                            }

                                        </Flex>

                                    </Card>
                                } />

                            </Form.Item>

                            <Form.Item>

                                <Flex vertical gap={'middle'} >

                                    <Flex vertical>
                                        <Title level={4}>Horários de Atendimento</Title>
                                    </Flex>

                                    <Card>

                                        <Flex vertical gap={'large'} justify="center" align="stretch">

                                            {newEstablishment.serviceTimes ?
                                                <List dataSource={newEstablishment.serviceTimes} renderItem={(serviceTime, index) => (
                                                    <Flex align="center" gap={'small'} flex={1} key={index} style={{ width: '100%' }}>
                                                        <Form.Item layout="vertical" label={serviceTime.title} style={{ width: '100%' }}>
                                                            <Flex vertical justify="center" gap={'small'} style={{ width: '100%' }}>
                                                                <Flex align="center" gap={'middle'} style={{ flex: 1 }}>
                                                                    <SunFilled />
                                                                    <TimePicker size="large" placeholder="Abre às" variant="outlined" value={dayjs(serviceTime.opensAt, 'HH:mm:ss')} style={{ flex: 1 }} />
                                                                </Flex>
                                                                <Flex align="center" gap={'middle'} style={{ flex: 1 }}>
                                                                    <MoonFilled />
                                                                    <TimePicker size="large" placeholder="Fecha às" variant="outlined" value={dayjs(serviceTime.closesAt, 'HH:mm:ss')} style={{ flex: 1 }} />
                                                                </Flex>
                                                            </Flex>
                                                        </Form.Item>
                                                    </Flex>
                                                )} />
                                                :
                                                <Result icon={<ClockCircleOutlined />} status={'info'} title='Nenhum horário de atendimento cadastrado no momento.' subTitle='Adicione quantos horários desejar para organizar o atendimento do seu estabelecimento.' extra={[
                                                    <Button key="no-service-times-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo Horário de Atendimento</Button>
                                                ]} />

                                            }

                                        </Flex>

                                    </Card>

                                </Flex>

                            </Form.Item>

                        </Form>

                    } />
                </Flex >
        },
        {
            title: 'Menus',
            content: <Flex>
                <Result icon={<MenuFoldOutlined />} status={'secondary'} title='Nenhum menu cadastrado' subTitle='Registre todos os endereços relacionados ao novo estabelecimento. Adicione quantos endereços forem necessários, identificando cada um de acordo com sua finalidade.' extra={[
                    <Button key="no-menus-found" icon={<PlusOutlined />} onClick={() => restart()}>Novo Menu</Button>
                ]} />
            </Flex>
        },
        {
            title: 'Resumo',
            content:

                <Card bodyStyle={{ padding: 0 }} style={{ width: '100%', height: '50vh', overflowY: 'auto', overflowX: "hidden" }}>

                    <Flex vertical gap={'small'} >

                        <Flex >

                            <Card bodyStyle={{ padding: 0 }} style={{ width: '100%', backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/uploads/bananas.png)' }}>

                                <Flex vertical style={{ background: 'rgba(0, 0, 0, .5)', backgroundBlendMode: 'darken' }}>

                                    <Flex align='center' gap={'middle'} style={{ padding: '1rem' }}>

                                        <Card bodyStyle={{ padding: '.5rem' }}>

                                            <Avatar size={128} shape="square" icon={<ShopOutlined />} />

                                        </Card>

                                        <Flex vertical>
                                            <Title ellipsis={{ rows: 3, expandable: false }} level={2}>{newEstablishment.name}</Title>
                                            <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'Ver mais' }}>{newEstablishment.description}</Paragraph>
                                        </Flex>

                                    </Flex>

                                </Flex>

                            </Card>

                        </Flex>

                        <Flex vertical gap="large" style={{ padding: '1rem' }}>
                            {Object.entries(newEstablishment).map(([key, value]) => (
                                <Flex key={key} vertical>
                                    <Paragraph style={{ margin: 0 }}>
                                        {formatKey(key)}
                                    </Paragraph>

                                    <Flex vertical gap="small" >
                                        {Array.isArray(value) ? (
                                            value.length > 0 ? (
                                                value.map((item, index) => (
                                                    <Paragraph
                                                        key={index}
                                                        style={{ margin: 0 }}
                                                        type="secondary"
                                                    >
                                                        {typeof item === 'string' ? item : JSON.stringify(item)}
                                                    </Paragraph>
                                                ))
                                            ) : (


                                                <Paragraph
                                                    style={{ margin: 0 }}
                                                    ellipsis={{ rows: 1, expandable: false, symbol: '...' }}
                                                    type="warning"
                                                >
                                                    Nenhum item cadastrado
                                                </Paragraph>

                                            )
                                        ) : (
                                            <Paragraph
                                                style={{ margin: 0 }}
                                                ellipsis={{ rows: 1, expandable: false, symbol: '...' }}
                                                type="secondary"
                                            >
                                                {value ?? <Paragraph type="danger">Não informado</Paragraph>}
                                            </Paragraph>
                                        )}
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>

                    </Flex>

                </Card>

        },
    ]

    const next = () => {
        const isValid = validateRequiredFields()

        if (isValid)
            setCurrent(current + 1)
    }

    const previous = () => {
        setCurrent(current - 1)
    }

    const currentPage = () => {
        setCurrent(current)
    }

    const retry = () => {
        setIsDone(false)
        setCancelling(false)
        currentPage()
    }

    const restart = () => {
        setNewEstablishment({
            name: null,
            description: null,
            type: null,
            menus: null,
            addresses: null,
            emails: null,
            serviceTimes: null,
            phones: null
        })
        setIsDone(false)
        setCancelling(false)
        setCurrent(0)
    }

    const showSuccessResult = () => {
        setIsDone(true)
    }

    const showCancelResult = () => {
        setCancelling(true)
    }

    const items = steps.map(item => ({ key: item.title, title: item.title }))

    return (

        < Flex vertical >

            {
                isCancelling ? <Result status={'warning'} title='Tem certeza que deseja cancelar?' subTitle='Todas as informações não salvas serão perdidas.' extra={[
                    <Button type="default" key="yes" danger onClick={onCancel}>
                        Sim
                    </Button>,
                    <Button key="no" onClick={() => retry()}>Não</Button>,
                ]} /> :

                    isDone ?

                        <Result status={'success'} title='Estabelecimento criado com sucesso!' subTitle='O estabelecimento foi criado com sucesso e está disponível para gerenciamento no sistema.' extra={[
                            <Button type="primary" key="console" icon={<BarsOutlined />} onClick={onCancel}>
                                Ver Estabelecimentos
                            </Button>,
                            <Button key="buy" icon={<PlusOutlined />} onClick={() => restart()}>Novo</Button>,
                        ]} /> :

                        <Flex vertical>
                            <Flex vertical>
                                <Title ellipsis={{ rows: 1, expandable: false, symbol: '...' }} level={3} style={{ margin: 0 }}>Novo Estabelecimento</Title>
                                <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>Cadastre e gerencie informações de novos estabelecimentos no sistema.</Paragraph>
                            </Flex>

                            <Flex vertical>

                                <Flex vertical wrap>

                                    <Flex style={{ padding: '2rem 0 2rem 0' }}>
                                        <Steps size="small" current={current} items={items} />
                                    </Flex>

                                    <Flex align="center" justify="center" style={{ overflowX: 'hidden' }}>{steps[current].content}</Flex>
                                    <Flex justify="space-between" style={{ marginTop: 24 }}>
                                        <Button style={{ margin: '0 8px' }} danger onClick={() => showCancelResult()}>
                                            Cancelar
                                        </Button>
                                        <Flex align="center">
                                            {current > 0 && (
                                                <Button style={{ margin: '0 8px' }} icon={<LeftOutlined />} iconPosition="end" onClick={() => previous()}>
                                                    Anterior
                                                </Button>
                                            )}
                                            {current < steps.length - 1 && (
                                                <Button type="primary" icon={<RightOutlined />} iconPosition="end" onClick={() => next()}>
                                                    Próximo
                                                </Button>
                                            )}
                                            {current === steps.length - 1 && (
                                                <Button type="primary" icon={<CheckOutlined />} iconPosition="end" onClick={() => showSuccessResult()}>
                                                    Concluir
                                                </Button>
                                            )}
                                        </Flex>
                                    </Flex>
                                </Flex>

                            </Flex>

                        </Flex>
            }

        </Flex >
    )
}
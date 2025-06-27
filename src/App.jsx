import { Avatar, Badge, Button, Col, ConfigProvider, Flex, Grid, Layout, Menu, Row, Segmented, theme, Tooltip } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout'
import { useEffect, useState } from 'react'
import { AlertOutlined, AppstoreFilled, DashboardOutlined, HomeOutlined, LeftOutlined, MenuOutlined, MoonOutlined, PlayCircleOutlined, ProductOutlined, QuestionCircleOutlined, SettingOutlined, ShopOutlined, SunOutlined } from '@ant-design/icons'
import Paragraph from 'antd/es/typography/Paragraph'
import AppRoutes from './AppRoutes'
import './App.css'
import SettingOverview from './pages/SettingOverview'

const { useBreakpoint } = Grid

function App() {

  const screens = useBreakpoint()

  const savedTheme = localStorage.getItem('theme')
  const menuCollapse = localStorage.getItem('menuCollapse') === 'true'

  const [collapsed, setCollapsed] = useState(menuCollapse)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    }
  }, [])

  const handleThemeChange = (value) => {
    const isDarkMode = value === 'dark'
    setDarkMode(value === 'dark')
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }

  const handleMenuCollapse = () => {
    const newCollapsedState = !collapsed
    setCollapsed(newCollapsedState)
    localStorage.setItem('menuCollapse', newCollapsedState)
  }

  const menuItems = [{
    key: '/',
    icon: <HomeOutlined />,
    label: 'Início',
  }, {
    key: '/dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  }, {
    key: '/establishments',
    icon: <ShopOutlined />,
    label: 'Estabelecimentos',
  }, {
    key: '/orders',
    icon: <ProductOutlined />,
    label: 'Pedidos',
  }, {
    key: '/settings',
    icon: <SettingOutlined />,
    label: 'Configurações',
  }, {
    key: '/help',
    icon: <QuestionCircleOutlined />,
    label: 'Central de Ajuda',
  }]

  const appBarHeight = 64

  const routesSettings = [{
    groups: [{ settings: [{ path: '/settings/establishment-data', page: <SettingOverview title={'Dados do Estabelecimento'} description={''} breadcrumb={{ items: [{ title: 'Início' }, { title: 'Configurações' }, { title: 'Dados do Estabelecimento' }] }} /> }] }]
  }]

  const isXs = screens.xs

  return (

    <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>

      <Layout>

        <Layout>

          <Sider theme={savedTheme} trigger={null} collapsible collapsed={collapsed} style={{ background: darkMode ? 'transparent' : '#ffffff' }}>
            <Flex vertical gap={'small'}>
              <Flex gap={'small'} align='center' justify={collapsed ? 'center' : 'start'} style={{ height: appBarHeight, padding: '1rem' }}>
                <Flex align='center' gap={'small'} flex={1}>
                  <Tooltip title={collapsed ? 'Expandir Menu' : 'Colapsar Menu'}>
                    <Button type='text' shape='square' size='small' icon={collapsed ? <MenuOutlined /> : <LeftOutlined style={{ fontSize: '.75rem' }} />} onClick={() => handleMenuCollapse()} />
                  </Tooltip>
                </Flex>
                {collapsed ?
                  <Flex align='center' gap={'small'} flex={1}>
                    <Avatar size='small' shape='circle' icon={<AppstoreFilled />} />
                  </Flex>
                  :
                  <Flex align='center' gap={'small'}>
                    <Avatar size='middle' shape='circle' icon={<AppstoreFilled />} />
                    <Paragraph type='secondary' ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0 }}>Food Fusion</Paragraph>
                  </Flex>
                }
              </Flex>

              <Menu theme={savedTheme}
                mode='inline'
                style={{ background: darkMode ? 'transparent' : '#ffffff' }}
                defaultSelectedKeys={[location.pathname]}
                onClick={(key) => location.href = key.keyPath}
                items={menuItems} />

            </Flex>
          </Sider>
          <Layout>
            <Header style={{ height: appBarHeight, padding: 0, background: darkMode ? 'transparent' : '#ffffff' }}>
              <Row gutter={[16, 16]}>

                <Col xs={{ span: 24, offset: 0 }}
                  sm={{ span: 24, offset: 0 }}
                  md={{ span: 24, offset: 0 }}
                  lg={{ span: 24, offset: 0 }}
                  xl={{ span: 20, offset: 2 }}
                  xxl={{ span: 20, offset: 2 }}>

                  <Flex align='center' justify='space-between' gap={'small'} style={{ padding: '.5rem', height: '100%', width: '100%' }}>

                    <Flex align='center' gap={'small'}>
                      <Segmented options={[{ icon: <SunOutlined />, value: 'light' }, { icon: <MoonOutlined />, value: 'dark' }]} onChange={handleThemeChange} value={darkMode} />
                      <Button type='primary' icon={<PlayCircleOutlined />}>Iniciar Tour</Button>
                    </Flex>

                    <Flex align='center' gap={'small'}>
                      <Tooltip title='Notifcações'>
                        <Badge count={12}>
                          <Button type='text' shape='circle' size='large' icon={<AlertOutlined />} />
                        </Badge>
                      </Tooltip>
                      <Avatar src={'/images/parker.jpeg'} size={'large'} shape='circle' />
                    </Flex>

                  </Flex>
                </Col>
              </Row>
            </Header>


            <Row gutter={[16, 16]}>

              <Col xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 24, offset: 0 }}
                lg={{ span: 24, offset: 0 }}
                xl={{ span: 20, offset: 2 }}
                xxl={{ span: 20, offset: 2 }}>

                <Content style={{
                  overflowX: 'hidden',
                  overflowY: 'auto',
                  height: '94vh'
                }}>

                  <AppRoutes routesSettings={routesSettings} theme={savedTheme} />

                </Content>

              </Col>
            </Row>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App

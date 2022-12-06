import '@reach/tabs/styles.css'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs'
import { ReactElement } from 'react'

interface ITabsDashboardProps {
  panes: Array<{
    menuItem: ReactElement
    render: ReactElement
  }>
}

const TabsDashboard: IComponent<ITabsDashboardProps> = ({ panes }) => {
  return (
    <div className="">
      <Tabs orientation="vertical">
        <TabList className="!h-[500px] mr-12 justify-center overflow-hidden rounded-3xl !bg-red-400">
          {panes.map((pane, index) => (
            <Tab key={index} className="w-[91px] !border-none !py-12">
              {pane.menuItem}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="tab-panels grow overflow-hidden rounded-3xl !bg-blue-100">
          {panes.map((pane, index) => (
            <TabPanel key={index} className="h-full rounded-3xl">
              {pane.render}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default TabsDashboard

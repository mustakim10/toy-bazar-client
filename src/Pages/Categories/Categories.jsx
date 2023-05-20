import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Categories = () => {
    return (
        <Tabs>
        <TabList >
          <div className='grid grid-cols-3'>
          <Tab>Regular Car</Tab>
          <Tab> Truck</Tab>
          <Tab>Police Car</Tab>
          </div>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    );
};

export default Categories;
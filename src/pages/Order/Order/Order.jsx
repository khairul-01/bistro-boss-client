import Cover from "../../Shared/cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
   const categories = ['salad','pizza','soup','desserts','drinks']
   const {category} = useParams();
   const initialIndex = categories.indexOf(category);
   const [tabIndex, setTabIndex] = useState(initialIndex);
   const [menu] = useMenu();
   console.log(category);
   const dessert = menu.filter(item => item.category === 'dessert');
   const pizza = menu.filter(item => item.category === 'pizza');
   const salad = menu.filter(item => item.category === 'salad');
   const soup = menu.filter(item => item.category === 'soup');
   const drinks = menu.filter(item => item.category === 'drinks')
   return (
      <div>
         <Helmet>
            <title>Bistro | Order Food</title>
         </Helmet>
         <Cover img={shopImg} title={"Our Shop"} ></Cover>
         <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
               <Tab >SALAD</Tab>
               <Tab>PIZZA</Tab>
               <Tab>SOUPS</Tab>
               <Tab>DESSERTS</Tab>
               <Tab>DRINKS</Tab>
            </TabList>
            <TabPanel>
               <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
               <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {
                     soup.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
                  }
               </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {
                     dessert.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
                  }
               </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {
                     drinks.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
                  }
               </div>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default Order;
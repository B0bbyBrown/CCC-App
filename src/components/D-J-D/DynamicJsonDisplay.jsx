import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./Components/Tabs/Tabs";
import { RenderCategoryData } from "./Components/RenderCategoryData/RenderCategoryData";

export function DynamicJsonDisplay({ data }) {
  const { categories } = data;
  const [activeTab, setActiveTab] = useState(Object.keys(categories)[0]); // Set first tab as active by default

  return (
    <div className="djd-container">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <TabsList>
          {Object.keys(categories).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(categories).map((category) => (
          <TabsContent key={category} value={category} activeTab={activeTab}>
            {RenderCategoryData(category, categories[category])}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

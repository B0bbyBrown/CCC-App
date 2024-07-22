import React from "react";
import { CentralNode } from "./CentralNode";
import { KeshavMainNode } from "./KeshavMainNode";
import { ShulkaMainNode } from "./ShulkaMainNode";
import { CompanyMainNode } from "./CompanyMainNode";
import { RenderIndividualSubNodes } from "./renderIndividualSubNodes";
import { RenderCompanySubNodes } from "./renderCompanySubNodes";

export const renderNodes = (
  data,
  positions,
  showPopup,
  hidePopup,
  handleNodeClick
) => {
  return (
    <>
      {data.company && (
        <CompanyMainNode
          position={positions.centralNode}
          showPopup={showPopup}
          hidePopup={hidePopup}
          data={data.company}
          onClick={() => handleNodeClick("Curious Cat Creative")}
        />
      )}

      {data.keshav && (
        <KeshavMainNode
          position={positions.individualNodes.Keshav.origin}
          showPopup={showPopup}
          hidePopup={hidePopup}
          data={data.keshav}
          onClick={() => handleNodeClick("Keshav")}
        />
      )}

      {data.shulka && (
        <ShulkaMainNode
          position={positions.individualNodes.Shulka.origin}
          showPopup={showPopup}
          hidePopup={hidePopup}
          data={data.shulka}
          onClick={() => handleNodeClick("Shulka")}
        />
      )}

      {data.combinedCategories && (
        <RenderIndividualSubNodes
          data={data}
          origin={positions.individualNodes.Keshav}
          showPopup={showPopup}
          hidePopup={hidePopup}
          color="#3CF3FF"
        />
      )}

      {data.combinedCategories && (
        <RenderIndividualSubNodes
          data={data}
          origin={positions.individualNodes.Shulka}
          showPopup={showPopup}
          hidePopup={hidePopup}
          color="#EB03FF"
        />
      )}

      {data.company && (
        <RenderCompanySubNodes
          data={data.company}
          positions={positions}
          showPopup={showPopup}
          hidePopup={hidePopup}
        />
      )}
    </>
  );
};

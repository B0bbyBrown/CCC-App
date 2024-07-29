import React from "react";
import { MainNode } from "./MainNode";
import { RenderIndividualSubNodes } from "./renderIndividualSubNodes";
import { RenderCompanySubNodes } from "./renderCompanySubNodes";

export const renderNodes = (
  data,
  positions,
  showPopup,
  hidePopup,
  handleNodeClick,
  camera
) => {
  return (
    <>
      {data.company && (
        <MainNode
          position={positions.centralNode}
          color="#FFFFFF"
          label="Curious Cat Creative"
          data={data.company}
          showPopup={showPopup}
          hidePopup={hidePopup}
          onClick={() => handleNodeClick("Curious Cat Creative")}
        />
      )}

      {data.keshav && (
        <MainNode
          position={positions.individualNodes.Keshav.origin}
          color="#3CF3FF"
          label="Keshav"
          data={data.keshav}
          showPopup={showPopup}
          hidePopup={hidePopup}
          onClick={() => handleNodeClick("Keshav")}
        />
      )}

      {data.shulka && (
        <MainNode
          position={positions.individualNodes.Shulka.origin}
          color="#EB03FF"
          label="Shulka"
          data={data.shulka}
          showPopup={showPopup}
          hidePopup={hidePopup}
          onClick={() => handleNodeClick("Shulka")}
        />
      )}

      {data.combinedCategories && (
        <RenderIndividualSubNodes
          data={data}
          origin={{
            origin: positions.individualNodes.Keshav.origin,
            positions: positions.individualNodes.Keshav.positions,
          }}
          showPopup={showPopup}
          hidePopup={hidePopup}
          color="#3CF3FF"
          camera={camera}
        />
      )}

      {data.combinedCategories && (
        <RenderIndividualSubNodes
          data={data}
          origin={{
            origin: positions.individualNodes.Shulka.origin,
            positions: positions.individualNodes.Shulka.positions,
          }}
          showPopup={showPopup}
          hidePopup={hidePopup}
          color="#EB03FF"
          camera={camera}
        />
      )}

      {data.company && (
        <RenderCompanySubNodes
          data={data.company}
          positions={positions}
          showPopup={showPopup}
          hidePopup={hidePopup}
          camera={camera}
        />
      )}
    </>
  );
};

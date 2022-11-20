import { Handle, Position } from "reactflow"
import { NodeProps } from "@reactflow/core/dist/esm/types/nodes"

export default function CustomNode(props: NodeProps) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={true}
      />
      <figure className={"react-flow__node-default"}>
        <img className={"object-fit w-40 h-40 p-2"} alt={"image"} src={props.data.image} />
        <figcaption title={"Caption"}>{props.data.label}</figcaption>
      </figure>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: "#555" }}
        isConnectable={true}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={true}
      />
    </>
  )
}

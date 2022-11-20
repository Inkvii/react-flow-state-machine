import { BezierEdgeProps, getBezierPath } from "reactflow"

export default function CustomEdge(props: BezierEdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    sourcePosition: props.sourcePosition,
    targetX: props.targetX,
    targetY: props.targetY,
    targetPosition: props.targetPosition,
  })

  return (
    <>
      <path
        id={props.id}
        style={props.style}
        className="react-flow__edge-path stroke-green-500"
        d={edgePath}
        markerEnd={props.markerEnd}
      />
    </>
  )
}

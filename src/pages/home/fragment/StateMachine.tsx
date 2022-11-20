import { useCallback } from "react"
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
  Position,
  useEdgesState,
  useNodesState,
} from "reactflow"
import CustomEdge from "pages/home/fragment/CustomEdge"

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 50, y: 50 },
    data: { label: "1" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "2",
    position: { x: 300, y: 50 },
    data: { label: "2" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "3",
    position: { x: 600, y: 50 },
    data: { label: "3" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
]

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "red" } },
  { id: "e2-3", source: "2", target: "3", type: "custom", animated: true },
]

const edgeTypes = {
  custom: CustomEdge,
}

export default function StateMachine() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      edgeTypes={edgeTypes}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  )
}

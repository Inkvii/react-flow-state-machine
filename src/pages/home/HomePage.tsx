import StateMachine from "pages/home/fragment/StateMachine"

export default function HomePage() {
  return (
    <div>
      Hello Home
      <div className={"w-[1024px] h-[600px] border mx-auto"}>
        <StateMachine />
      </div>
    </div>
  )
}

import "./Stopwatch.css"

export default function StopwatchUnit({ state, maxValue, setState }) {
  return (
    <div className="stopwatch-unit  non-editable">
      <input
        type="text"
        className="value"
        value={state}
        disabled={true}
      />
    </div>
  )
}
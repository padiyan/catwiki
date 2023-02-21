import './Scale.css'

export default function scale({value}) {
    return (
        <>
            <div className="scale">
                { new Array(5).fill(0).map((_, index) => (<div data-testid={`point-${index + 1}`} className={index < value ? 'point': 'point gray'} key={index}></div>)) }
            </div>
        </>
    )
}
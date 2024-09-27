// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/radar
import { Radar } from '@nivo/radar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
        "taste": "fruity",
        "chardonay": 59,
        "carmenere": 25,
        "syrah": 92
    },
    {
        "taste": "bitter",
        "chardonay": 68,
        "carmenere": 58,
        "syrah": 35
    },
    {
        "taste": "heavy",
        "chardonay": 68,
        "carmenere": 76,
        "syrah": 74
    },
    {
        "taste": "strong",
        "chardonay": 71,
        "carmenere": 99,
        "syrah": 71
    },
    {
        "taste": "sunny",
        "chardonay": 119,
        "carmenere": 91,
        "syrah": 21
    }
]

const Radar = ({ data /* see data tab */ }) => (
    <ResponsiveRadar
        data={data}
        keys={['chardonay', 'carmenere', 'syrah']}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

export default Radar
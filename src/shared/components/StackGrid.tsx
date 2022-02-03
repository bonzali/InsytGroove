import React, { useRef } from 'react'
import {
    default as ReactStackGrid,
    transitions,
    easings,
} from 'react-stack-grid'
const transition = transitions.scaleDown

type Props = {
    columnWidth: string
    style?: any
}
class StackGrid extends React.Component<Props> {
    renderGrid() {
        const that: any = this
        setTimeout(() => {
            that.grid.updateLayout()
        }, 550)
    }

    render() {
        const { children, style, columnWidth } = this.props
        const that: any = this
        return (
            <>
                {this.renderGrid()}
                <ReactStackGrid
                    duration={600}
                    easing={easings.cubicOut}
                    appearDelay={60}
                    appear={transition.appear}
                    appeared={transition.appeared}
                    enter={transition.enter}
                    entered={transition.entered}
                    leaved={transition.leaved}
                    monitorImagesLoaded
                    style={style}
                    columnWidth={columnWidth}
                    gridRef={(grid) => (that.grid = grid)}
                >
                    {children}
                </ReactStackGrid>
            </>
        )
    }
}

export default StackGrid

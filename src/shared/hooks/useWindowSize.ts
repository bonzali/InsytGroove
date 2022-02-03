import React from 'react'
import debounce from 'lodash/debounce'

type Props = {
    delay?: number
}

function useWindowSize({ delay }: Props = { delay: 700 }): {
    width: number
    height: number
} {
    const [windowSize, setWindowSize] = React.useState({
        width: 1200,
        height: 1200,
    })

    const changeWindowSize = debounce(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }, delay)

    React.useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        window.addEventListener('resize', changeWindowSize)
        return () => {
            window.removeEventListener('resize', changeWindowSize)
        }
    }, [])

    return windowSize
}

export { useWindowSize }

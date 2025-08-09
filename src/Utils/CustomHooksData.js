export const CustomHooksData = [
    {
        name: 'Click outside detection',
        description: 'Detects when a click occurs outside of a specified element. Primarily used to close dropdowns, modals, or popovers when the user clicks elsewhere on the page',
        usages: 'Ideal for dismissing interactive elements when users click outside of them',
        behavior: 'Attaches a "mousedown" or "touchstart" event to detect clicks outside the target element, invoking a callback when detected',
        keywords: [
            'outside click',
            'click',
            'dismiss element'
        ],
        codes: 'export const useClickOutside = (ref, callback) => {\n' +
            '    useEffect(() => {\n' +
            '        const listener = event => {\n' +
            '            if (!ref.current || ref.current.contains(event.target)) {\n' +
            '                return;\n' +
            '            }\n' +
            '            callback(event);\n' +
            '        };\n' +
            '\n' +
            '        document.addEventListener("mousedown", listener);\n' +
            '        document.addEventListener("touchstart", listener);\n' +
            '\n' +
            '        return () => {\n' +
            '            document.removeEventListener("mousedown", listener);\n' +
            '            document.removeEventListener("touchstart", listener);\n' +
            '        };\n' +
            '    }, [ref, callback]);\n' +
            '};',
    },
    {
        name: 'Clipboard operations',
        description: 'Provides functionality to copy text to the clipboard, returning feedback on whether the copy was successful.',
        usages: 'Useful for \'Copy to clipboard\' buttons, such as for sharing links or copying promo codes.',
        behavior: 'Takes text to copy as an argument and returns a boolean indicating the success of the copy action.',
        keywords: [
            'copy to clipboard',
            'copy function',
            'text copy'
        ],
        codes: 'export const useCopyToClipboard = () => {\n' +
            '    const [copiedText, setCopiedText] = useState(null);\n' +
            '\n' +
            '    const copy = async text => {\n' +
            '        if (!navigator?.clipboard) {\n' +
            '            console.warn("Clipboard not supported");\n' +
            '            return false;\n' +
            '        }\n' +
            '\n' +
            '        try {\n' +
            '            await navigator.clipboard.writeText(text);\n' +
            '            setCopiedText(text);\n' +
            '            return true;\n' +
            '        } catch (error) {\n' +
            '            console.warn("Copy failed", error);\n' +
            '            setCopiedText(null);\n' +
            '            return false;\n' +
            '        }\n' +
            '    };\n' +
            '\n' +
            '    return [copiedText, copy];\n' +
            '};',
    },
    {
        name: 'Local storage management',
        description: 'A hook for managing values in local storage, enabling data persistence across page reloads. It provides a way to store, retrieve, and update values directly from state.\n',
        usages: 'Useful for persisting user preferences, such as theme settings or language choices.',
        behavior: 'Retrieves the value from local storage on initial load. If the key doesn’t exist, it sets an initial value. Any updates to the state automatically sync with local storage.',
        keywords: [
            'local storage manage',
            'store data local storage',
        ],
        codes: 'export const useLocalStorage = (key, initialValue) => {\n' +
            '    const [storedValue, setStoredValue] = useState(() => {\n' +
            '        try {\n' +
            '            const item = window.localStorage.getItem(key);\n' +
            '            return item ? JSON.parse(item) : initialValue;\n' +
            '        } catch (error) {\n' +
            '            return initialValue;\n' +
            '        }\n' +
            '    });\n' +
            '\n' +
            '    const setValue = value => {\n' +
            '        try {\n' +
            '            const valueToStore = value instanceof Function ? value(storedValue) : value;\n' +
            '            setStoredValue(valueToStore);\n' +
            '            window.localStorage.setItem(key, JSON.stringify(valueToStore));\n' +
            '        } catch (error) {\n' +
            '            console.log(error);\n' +
            '        }\n' +
            '    };\n' +
            '\n' +
            '    return [storedValue, setValue];\n' +
            '};',
    },
    {
        name: 'Media queries',
        description: 'Tracks if the viewport matches a given CSS media query, allowing responsive design adjustments in JavaScript.',
        usages: 'Great for toggling components or applying different layouts depending on screen size.',
        behavior: 'Monitors viewport changes and re-evaluates the media query on resize, returning a boolean indicating if the query matches.',
        keywords: [
            'responsive',
            'media queries',
            'dynamic viewport queries',
        ],
        codes: 'export const useMediaQuery = query => {\n' +
            '    const [matches, setMatches] = useState(false);\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        const media = window.matchMedia(query);\n' +
            '        if (media.matches !== matches) {\n' +
            '            setMatches(media.matches);\n' +
            '        }\n' +
            '        const listener = () => setMatches(media.matches);\n' +
            '        media.addListener(listener);\n' +
            '        return () => media.removeListener(listener);\n' +
            '    }, [matches, query]);\n' +
            '\n' +
            '    return matches;\n' +
            '};',
    },
    {
        name: 'Async operations',
        description: 'Manages asynchronous operations by handling loading, success, and error states automatically.',
        usages: 'Suitable for data fetching, where tracking the request’s loading and error state is necessary.',
        behavior: 'Executes the async function and provides the result, error, and loading state to the component.',
        keywords: [
            'http request',
            'async operation handling',
            'data fetching',
        ],
        codes: 'export const useAsync = (asyncFunction, immediate = true) => {\n' +
            '    const [status, setStatus] = useState("idle");\n' +
            '    const [value, setValue] = useState(null);\n' +
            '    const [error, setError] = useState(null);\n' +
            '\n' +
            '    const execute = useCallback(async () => {\n' +
            '        setStatus("pending");\n' +
            '        setValue(null);\n' +
            '        setError(null);\n' +
            '\n' +
            '        try {\n' +
            '            const response = await asyncFunction();\n' +
            '            setValue(response);\n' +
            '            setStatus("success");\n' +
            '        } catch (error) {\n' +
            '            setError(error);\n' +
            '            setStatus("error");\n' +
            '        }\n' +
            '    }, [asyncFunction]);\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        if (immediate) {\n' +
            '            execute();\n' +
            '        }\n' +
            '    }, [execute, immediate]);\n' +
            '\n' +
            '    return { execute, status, value, error };\n' +
            '};',
    },
    {
        name: 'Window sizing',
        description: 'Tracks the window’s width and height, updating automatically on resize events.',
        usages: 'Commonly used in responsive designs to adjust layout based on window size.',
        behavior: 'Attaches a resize event listener and returns updated width and height values.',
        keywords: [
            'dynamic viewport calculate',
            'window size detection',
            'window size calculation',
        ],
        codes: 'export const useWindowSize = () => {\n' +
            '    const [windowSize, setWindowSize] = useState({\n' +
            '        width: undefined,\n' +
            '        height: undefined,\n' +
            '    });\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        const handleResize = () => {\n' +
            '            setWindowSize({\n' +
            '                width: window.innerWidth,\n' +
            '                height: window.innerHeight,\n' +
            '            });\n' +
            '        };\n' +
            '\n' +
            '        window.addEventListener("resize", handleResize);\n' +
            '        handleResize();\n' +
            '\n' +
            '        return () => window.removeEventListener("resize", handleResize);\n' +
            '    }, []);\n' +
            '\n' +
            '    return windowSize;\n' +
            '};',
    },
    {
        name: 'Hover detection',
        description: 'Tracks whether a specified element is being hovered over, allowing conditional styling or functionality on hover.',
        usages: 'Useful for showing tooltips, animations, or changing styles when an element is hovered.',
        behavior: 'Tracks mouse enter and leave events on the target element, returning a boolean hover state.',
        keywords: [
            'hover element detection',
            'hover',
            'get the hovered element',
        ],
        codes: 'export const useHover = () => {\n' +
            '    const [isHovered, setIsHovered] = useState(false);\n' +
            '    const ref = useRef(null);\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        const element = ref.current;\n' +
            '        if (!element) return;\n' +
            '\n' +
            '        const handleMouseOver = () => setIsHovered(true);\n' +
            '        const handleMouseOut = () => setIsHovered(false);\n' +
            '\n' +
            '        element.addEventListener("mouseover", handleMouseOver);\n' +
            '        element.addEventListener("mouseout", handleMouseOut);\n' +
            '\n' +
            '        return () => {\n' +
            '            element.removeEventListener("mouseover", handleMouseOver);\n' +
            '            element.removeEventListener("mouseout", handleMouseOut);\n' +
            '        };\n' +
            '    }, []);\n' +
            '\n' +
            '    return [ref, isHovered];\n' +
            '};',
    },
    {
        name: 'Scroll position tracking',
        description: 'Tracks the current scroll position, enabling animations, sticky headers, or infinite scrolling behaviors.',
        usages: 'Often used to trigger animations as the user scrolls or to load more content in an infinite scroll.',
        behavior: 'Returns the current scroll position by attaching a scroll event listener and updating on scroll events.',
        keywords: [
            'scroll position tracking',
            'scroll calculating',
            'window scroll track',
        ],
        codes: 'export const useScrollPosition = () => {\n' +
            '    const [scrollPosition, setScrollPosition] = useState(0);\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        const updatePosition = () => {\n' +
            '            setScrollPosition(window.pageYOffset);\n' +
            '        };\n' +
            '\n' +
            '        window.addEventListener("scroll", updatePosition);\n' +
            '        updatePosition();\n' +
            '\n' +
            '        return () => window.removeEventListener("scroll", updatePosition);\n' +
            '    }, []);\n' +
            '\n' +
            '    return scrollPosition;\n' +
            '};',
    },
    {
        name: 'Session storage',
        description: 'A hook similar to useLocalStorage, but stores values in session storage, which is cleared once the browser tab is closed.',
        usages: 'Useful for managing data relevant to a single session, like temporary preferences or form data.',
        behavior: 'Retrieves values from session storage on load, updates them when set, and removes them when necessary.',
        keywords: [
            'session storage',
        ],
        codes: 'export const useSessionStorage = (key, initialValue) => {\n' +
            '  const [storedValue, setStoredValue] = useState(() => {\n' +
            '    try {\n' +
            '      const item = window.sessionStorage.getItem(key);\n' +
            '      return item ? JSON.parse(item) : initialValue;\n' +
            '    } catch (error) {\n' +
            '      return initialValue;\n' +
            '    }\n' +
            '  });\n' +
            '\n' +
            '  const setValue = value => {\n' +
            '    try {\n' +
            '      const valueToStore = value instanceof Function ? value(storedValue) : value;\n' +
            '      setStoredValue(valueToStore);\n' +
            '      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));\n' +
            '    } catch (error) {\n' +
            '      console.log(error);\n' +
            '    }\n' +
            '  };\n' +
            '\n' +
            '  return [storedValue, setValue];\n' +
            '};',
    },
    {
        name: 'Throttling',
        description: 'Limits the rate at which a function or value updates, ensuring it only changes at defined intervals.',
        usages: 'Useful for improving performance during high-frequency events like scrolling, resizing, or typing.',
        behavior: 'Restricts updates to occur only once every defined delay, ignoring intermediate changes.',
        keywords: [
            'async',
            'debounce',
        ],
        codes: 'export const useThrottle = (value, limit) => {\n' +
            '  const [throttledValue, setThrottledValue] = useState(value);\n' +
            '  const lastRan = useRef(Date.now());\n' +
            '\n' +
            '  useEffect(() => {\n' +
            '    const handler = setTimeout(() => {\n' +
            '      if (Date.now() - lastRan.current >= limit) {\n' +
            '        setThrottledValue(value);\n' +
            '        lastRan.current = Date.now();\n' +
            '      }\n' +
            '    }, limit - (Date.now() - lastRan.current));\n' +
            '\n' +
            '    return () => {\n' +
            '      clearTimeout(handler);\n' +
            '    };\n' +
            '  }, [value, limit]);\n' +
            '\n' +
            '  return throttledValue;\n' +
            '};',
    },
    {
        name: 'Key press detection',
        description: 'Detects when a specific key or combination of keys is pressed, enabling custom keyboard shortcuts or accessibility features.',
        usages: 'Commonly used for handling keyboard shortcuts, accessibility features, or special actions.',
        behavior: 'Listens for keydown and keyup events, tracking if the specified key(s) are currently pressed.',
        keywords: [
            'keypress detect',
            'handle keypress',
        ],
        codes: 'export const useKeyPress = targetKey => {\n' +
            '  const [keyPressed, setKeyPressed] = useState(false);\n' +
            '\n' +
            '  useEffect(() => {\n' +
            '    const downHandler = ({ key }) => {\n' +
            '      if (key === targetKey) {\n' +
            '        setKeyPressed(true);\n' +
            '      }\n' +
            '    };\n' +
            '\n' +
            '    const upHandler = ({ key }) => {\n' +
            '      if (key === targetKey) {\n' +
            '        setKeyPressed(false);\n' +
            '      }\n' +
            '    };\n' +
            '\n' +
            '    window.addEventListener(\'keydown\', downHandler);\n' +
            '    window.addEventListener(\'keyup\', upHandler);\n' +
            '\n' +
            '    return () => {\n' +
            '      window.removeEventListener(\'keydown\', downHandler);\n' +
            '      window.removeEventListener(\'keyup\', upHandler);\n' +
            '    };\n' +
            '  }, [targetKey]);\n' +
            '\n' +
            '  return keyPressed;\n' +
            '};',
    },
    {
        name: 'handle List',
        description: 'A custom hook that manages a dynamic list of items, providing functionalities to add, remove, update, and reorder items efficiently. This hook simplifies the state management of lists within components.',
        usages: 'Useful for scenarios like managing a shopping cart, to-do list, or any other collection of items where users can perform actions like adding, editing, or deleting entries.',
        behavior: 'Takes an initial array as input and returns the current list state along with a set of utility functions.',
        keywords: [
            'keypress detect',
            'handle keypress',
        ],
        codes: 'export const useList = (initialList = []) => {\n' +
            '  const [list, setList] = useState(initialList);\n' +
            '\n' +
            '  return {\n' +
            '    list,\n' +
            '    addItem: item => setList([...list, item]),\n' +
            '    removeItem: index => setList(list.filter((_, i) => i !== index)),\n' +
            '    updateItem: (index, item) => setList(list.map((l, i) => (i === index ? item : l))),\n' +
            '    clear: () => setList([]),\n' +
            '    reset: () => setList(initialList),\n' +
            '  };\n' +
            '};',
    },
    {
        name: 'State With History',
        description: 'Manages state with a history stack, allowing users to navigate back and forth through previous values.',
        usages: 'Useful in applications that require undo/redo functionality, such as text editors or forms.',
        behavior: 'Stores previous states and provides methods to undo or redo changes, maintaining a history limit.',
        keywords: [
            'redo undo',
            'history back',
        ],
        codes: 'export const useStateWithHistory = (initialState) => {\n' +
            '  const [state, setState] = useState(initialState);\n' +
            '  const [history, setHistory] = useState([initialState]);\n' +
            '  const [pointer, setPointer] = useState(0);\n' +
            '\n' +
            '  const undo = () => {\n' +
            '    if (pointer > 0) {\n' +
            '      setPointer(pointer - 1);\n' +
            '      setState(history[pointer - 1]);\n' +
            '    }\n' +
            '  };\n' +
            '\n' +
            '  const redo = () => {\n' +
            '    if (pointer < history.length - 1) {\n' +
            '      setPointer(pointer + 1);\n' +
            '      setState(history[pointer + 1]);\n' +
            '    }\n' +
            '  };\n' +
            '\n' +
            '  const pushState = (newState) => {\n' +
            '    setState(newState);\n' +
            '    setHistory([...history.slice(0, pointer + 1), newState]);\n' +
            '    setPointer(pointer + 1);\n' +
            '  };\n' +
            '\n' +
            '  return [state, pushState, undo, redo];\n' +
            '};',
    },
    {
        name: 'Mouse Position',
        description: 'Tracks the mouse position within the viewport, returning current coordinates.',
        usages: 'Useful for interactive components that respond to mouse movements, such as tooltips or custom cursors.',
        behavior: 'Updates mouse position in real-time as the mouse moves across the screen.',
        keywords: [
            'track mouse position',
            'detect the mouse position',
        ],
        codes: 'export const useMousePosition = () => {\n' +
            '  const [position, setPosition] = useState({ x: 0, y: 0 });\n' +
            '\n' +
            '  useEffect(() => {\n' +
            '    const handleMove = (e) => {\n' +
            '      setPosition({ x: e.clientX, y: e.clientY });\n' +
            '    };\n' +
            '\n' +
            '    window.addEventListener(\'mousemove\', handleMove);\n' +
            '    return () => window.removeEventListener(\'mousemove\', handleMove);\n' +
            '  }, []);\n' +
            '\n' +
            '  return position;\n' +
            '};',
    },
    {
        name: 'track network status',
        description: 'Monitors the network status of the application, providing online/offline information.',
        usages: ' Useful for applications that need to handle data synchronization in offline-first scenarios.',
        behavior: 'Updates state based on network connection changes, allowing developers to respond accordingly.',
        keywords: [
            'track network',
            'detect the online/offline information',
        ],
        codes: 'export const useNetwork = () => {\n' +
            '  const [network, setNetwork] = useState({\n' +
            '    online: navigator.onLine,\n' +
            '    speed: null,\n' +
            '    type: null,\n' +
            '  });\n' +
            '\n' +
            '  useEffect(() => {\n' +
            '    const updateNetwork = () => {\n' +
            '      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;\n' +
            '      setNetwork({\n' +
            '        online: navigator.onLine,\n' +
            '        speed: connection?.downlink,\n' +
            '        type: connection?.effectiveType,\n' +
            '      });\n' +
            '    };\n' +
            '\n' +
            '    window.addEventListener(\'online\', updateNetwork);\n' +
            '    window.addEventListener(\'offline\', updateNetwork);\n' +
            '    if (navigator.connection) {\n' +
            '      navigator.connection.addEventListener(\'change\', updateNetwork);\n' +
            '    }\n' +
            '\n' +
            '    return () => {\n' +
            '      window.removeEventListener(\'online\', updateNetwork);\n' +
            '      window.removeEventListener(\'offline\', updateNetwork);\n' +
            '      if (navigator.connection) {\n' +
            '        navigator.connection.removeEventListener(\'change\', updateNetwork);\n' +
            '      }\n' +
            '    };\n' +
            '  }, []);\n' +
            '\n' +
            '  return network;\n' +
            '};',
    },
    {
        name: 'data Caching',
        description: 'Manages a caching mechanism for data fetching to optimize performance.',
        usages: 'Ideal for applications that frequently fetch data from APIs, reducing redundant requests.',
        behavior: 'Stores and retrieves data from cache, enhancing loading times and responsiveness.',
        keywords: [
            'catch data',
            'store data',
            'manage data'
        ],
        codes: 'export const useCache = (initialData = {}) => {\n' +
            '  const [cache, setCache] = useState(initialData);\n' +
            '  const [timestamps, setTimestamps] = useState({});\n' +
            '\n' +
            '  const set = (key, value, ttl = 0) => {\n' +
            '    setCache(prev => ({ ...prev, [key]: value }));\n' +
            '    if (ttl > 0) {\n' +
            '      setTimestamps(prev => ({\n' +
            '        ...prev,\n' +
            '        [key]: Date.now() + ttl * 1000,\n' +
            '      }));\n' +
            '    }\n' +
            '  };\n' +
            '\n' +
            '  const get = (key) => {\n' +
            '    if (timestamps[key] && Date.now() > timestamps[key]) {\n' +
            '      remove(key);\n' +
            '      return undefined;\n' +
            '    }\n' +
            '    return cache[key];\n' +
            '  };\n' +
            '\n' +
            '  const remove = (key) => {\n' +
            '    setCache(prev => {\n' +
            '      const newCache = { ...prev };\n' +
            '      delete newCache[key];\n' +
            '      return newCache;\n' +
            '    });\n' +
            '    setTimestamps(prev => {\n' +
            '      const newTimestamps = { ...prev };\n' +
            '      delete newTimestamps[key];\n' +
            '      return newTimestamps;\n' +
            '    });\n' +
            '  };\n' +
            '\n' +
            '  return { cache, set, get, remove };\n' +
            '};',
    },
    {
        name: 'clipboard API',
        description: 'Facilitates interaction with the clipboard, allowing text or data to be copied or read.',
        usages: 'Useful in applications where users need to copy information, such as code snippets or URLs.',
        behavior: 'Provides methods to read from and write to the clipboard, handling clipboard events effectively.',
        keywords: [
            'coping text with controlled',
        ],
        codes: 'export const useClipboardAPI = () => {\n' +
            '  const [clipboardData, setClipboardData] = useState(null);\n' +
            '  const [error, setError] = useState(null);\n' +
            '\n' +
            '  const writeText = async (text) => {\n' +
            '    try {\n' +
            '      await navigator.clipboard.writeText(text);\n' +
            '      setClipboardData(text);\n' +
            '      setError(null);\n' +
            '      return true;\n' +
            '    } catch (err) {\n' +
            '      setError(err);\n' +
            '      return false;\n' +
            '    }\n' +
            '  };\n' +
            '\n' +
            '  const readText = async () => {\n' +
            '    try {\n' +
            '      const text = await navigator.clipboard.readText();\n' +
            '      setClipboardData(text);\n' +
            '      setError(null);\n' +
            '      return text;\n' +
            '    } catch (err) {\n' +
            '      setError(err);\n' +
            '      return null;\n' +
            '    }\n' +
            '  };\n' +
            '\n' +
            '  return { clipboardData, error, writeText, readText };\n' +
            '};',
    },
    {
        name: 'Infinite Scrolling',
        description: 'Implements infinite scrolling functionality by fetching data when the user scrolls to the bottom.',
        usages: 'Ideal for lists or feeds where additional items should load automatically as the user scrolls.',
        behavior: 'Monitors scroll position and triggers data fetching when reaching a specified threshold.',
        keywords: [
            'infinite scrolling',
        ],
        codes: 'export const useInfiniteScroll = (callback, options = {}) => {\n' +
            '    const { threshold = 100, element = window } = options;\n' +
            '    const [isFetching, setIsFetching] = useState(false);\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        const handleScroll = async () => {\n' +
            '            const scrollElement = element === window ? document.documentElement : element;\n' +
            '            const scrolled = scrollElement.scrollTop + scrollElement.clientHeight;\n' +
            '            const threshold = scrollElement.scrollHeight - threshold;\n' +
            '\n' +
            '            if (scrolled >= threshold && !isFetching) {\n' +
            '                setIsFetching(true);\n' +
            '                await callback();\n' +
            '                setIsFetching(false);\n' +
            '            }\n' +
            '        };\n' +
            '\n' +
            '        element.addEventListener("scroll", handleScroll);\n' +
            '        return () => element.removeEventListener("scroll", handleScroll);\n' +
            '    }, [callback, element, threshold, isFetching]);\n' +
            '\n' +
            '    return isFetching;\n' +
            '};\n',
    },
    {
        name: 'Pagination',
        description: 'Manages pagination state and provides functionality to navigate through paged data.',
        usages: 'Useful in applications displaying large datasets, allowing users to navigate pages easily.',
        behavior: 'Keeps track of the current page, total pages, and provides methods to change pages.',
        keywords: [
            'pagination',
        ],
        codes: 'export const usePagination = (totalItems, itemsPerPage = 10, initialPage = 1) => {\n' +
            '  const [currentPage, setCurrentPage] = useState(initialPage);\n' +
            '  const totalPages = Math.ceil(totalItems / itemsPerPage);\n' +
            '\n' +
            '  const nextPage = () => {\n' +
            '    setCurrentPage(page => Math.min(page + 1, totalPages));\n' +
            '  };\n' +
            '\n' +
            '  const prevPage = () => {\n' +
            '    setCurrentPage(page => Math.max(page - 1, 1));\n' +
            '  };\n' +
            '\n' +
            '  const goToPage = (page) => {\n' +
            '    const pageNumber = Math.min(Math.max(1, page), totalPages);\n' +
            '    setCurrentPage(pageNumber);\n' +
            '  };\n' +
            '\n' +
            '  const pageItems = {\n' +
            '    start: (currentPage - 1) * itemsPerPage,\n' +
            '    end: Math.min(currentPage * itemsPerPage, totalItems),\n' +
            '  };\n' +
            '\n' +
            '  return {\n' +
            '    currentPage,\n' +
            '    totalPages,\n' +
            '    nextPage,\n' +
            '    prevPage,\n' +
            '    goToPage,\n' +
            '    pageItems,\n' +
            '    hasNextPage: currentPage < totalPages,\n' +
            '    hasPrevPage: currentPage > 1,\n' +
            '  };\n' +
            '};',
    },
    {
        name: 'observe Intersection Observer',
        description: 'Utilizes the Intersection Observer API to track visibility of elements within the viewport.',
        usages: 'Useful for lazy loading images, infinite scrolling, or triggering animations on visibility.',
        behavior: 'Monitors specified elements and triggers callbacks when they enter or exit the viewport.',
        keywords: [
            'observe the intersection',
            'scroll animation with intersection observer',
        ],
        codes: 'export const useIntersectionObserver = (ref, options = {}) => {\n' +
            '  const [isIntersecting, setIntersecting] = useState(false);\n' +
            '\n' +
            '  useEffect(() => {\n' +
            '    if (!ref.current) return;\n' +
            '\n' +
            '    const observer = new IntersectionObserver(([entry]) => {\n' +
            '      setIntersecting(entry.isIntersecting);\n' +
            '    }, options);\n' +
            '\n' +
            '    observer.observe(ref.current);\n' +
            '    return () => observer.disconnect();\n' +
            '  }, [ref, options]);\n' +
            '\n' +
            '  return isIntersecting;\n' +
            '};',
    },
    {
        name: 'Count down timer',
        description: 'Implements a countdown timer that counts down from a specified duration.',
        usages: 'Useful for time-limited events, such as quizzes, promotions, or notifications.',
        behavior: 'Starts the countdown from a given time, providing updates and triggering a callback upon completion.',
        keywords: [
            'timer',
            'countdown',
        ],
        codes: 'export const useCountdown = (initialCount, interval = 1000) => {\n' +
            '  const [count, setCount] = useState(initialCount);\n' +
            '  const [isRunning, setIsRunning] = useState(false);\n' +
            '\n' +
            '  useEffect(() => {\n' +
            '    let timer;\n' +
            '    if (isRunning && count > 0) {\n' +
            '      timer = setInterval(() => {\n' +
            '        setCount(c => c - 1);\n' +
            '      }, interval);\n' +
            '    }\n' +
            '    return () => clearInterval(timer);\n' +
            '  }, [count, interval, isRunning]);\n' +
            '\n' +
            '  const start = () => setIsRunning(true);\n' +
            '  const pause = () => setIsRunning(false);\n' +
            '  const reset = () => {\n' +
            '    setCount(initialCount);\n' +
            '    setIsRunning(false);\n' +
            '  };\n' +
            '\n' +
            '  return { count, isRunning, start, pause, reset };\n' +
            '};',
    },
    {
        name: 'handle auto Focus',
        description: 'Manages focus state for a component, allowing it to receive or lose focus programmatically.',
        usages: 'Useful for accessibility and improving user experience in forms or interactive elements.',
        behavior: 'Provides methods to set and clear focus on the target element, facilitating keyboard navigation.',
        keywords: [
            'autofocus',
            'focus element dynamically',
        ],
        codes: 'export const useFocus = () => {\n' +
            '  const [isFocused, setIsFocused] = useState(false);\n' +
            '  const elementRef = useRef(null);\n' +
            '\n' +
            '  useEffect(() => {\n' +
            '    if (!elementRef.current) return;\n' +
            '\n' +
            '    const onFocus = () => setIsFocused(true);\n' +
            '    const onBlur = () => setIsFocused(false);\n' +
            '\n' +
            '    elementRef.current.addEventListener(\'focus\', onFocus);\n' +
            '    elementRef.current.addEventListener(\'blur\', onBlur);\n' +
            '\n' +
            '    return () => {\n' +
            '      if (elementRef.current) {\n' +
            '        elementRef.current.removeEventListener(\'focus\', onFocus);\n' +
            '        elementRef.current.removeEventListener(\'blur\', onBlur);\n' +
            '      }\n' +
            '    };\n' +
            '  }, []);\n' +
            '\n' +
            '  return [elementRef, isFocused];\n' +
            '};',
    },
    {
        name: 'handle Image Load',
        description: 'Monitors the loading state of an image, providing callbacks for success or error events.',
        usages: 'Useful in scenarios where image loading impacts UI, such as galleries or dynamic image displays.',
        behavior: 'Tracks loading progress, handling events for successful loading or errors.',
        keywords: [
            'image load',
            'load image progressive',
        ],
        codes: 'export const useImageLoad = (src) => {\n' +
            '  const [status, setStatus] = useState({\n' +
            '    loaded: false,\n' +
            '    error: false,\n' +
            '    image: null,\n' +
            '  });\n' +
            '\n' +
            '  useEffect(() => {\n' +
            '    const img = new Image();\n' +
            '    img.src = src;\n' +
            '\n' +
            '    img.onload = () => {\n' +
            '      setStatus({\n' +
            '        loaded: true,\n' +
            '        error: false,\n' +
            '        image: img,\n' +
            '      });\n' +
            '    };\n' +
            '\n' +
            '    img.onerror = () => {\n' +
            '      setStatus({\n' +
            '        loaded: false,\n' +
            '        error: true,\n' +
            '        image: null,\n' +
            '      });\n' +
            '    };\n' +
            '\n' +
            '    return () => {\n' +
            '      img.onload = null;\n' +
            '      img.onerror = null;\n' +
            '    };\n' +
            '  }, [src]);\n' +
            '\n' +
            '  return status;\n' +
            '};',
    },
    {
        name: 'Virtual Scroll',
        description: 'Implements virtual scrolling to improve performance when rendering large lists or collections of items by only rendering visible items within the viewport.',
        usages: 'Useful in applications displaying extensive datasets, such as tables or lists, where rendering all items at once could cause performance issues.',
        behavior: 'Calculates which items are currently visible based on scroll position and dynamically updates the rendered items to enhance responsiveness and reduce memory usage.',
        keywords: [
            'handle vertical scrolling',
        ],
        codes: 'export const useVirtualScroll = (items, rowHeight, visibleRows) => {\n' +
            '  const [scrollTop, setScrollTop] = useState(0);\n' +
            '  const totalHeight = items.length * rowHeight;\n' +
            '  const startIndex = Math.floor(scrollTop / rowHeight);\n' +
            '  const endIndex = Math.min(startIndex + visibleRows, items.length);\n' +
            '\n' +
            '  const visibleItems = items.slice(startIndex, endIndex).map((item, index) => ({\n' +
            '    ...item,\n' +
            '    position: (startIndex + index) * rowHeight,\n' +
            '  }));\n' +
            '\n' +
            '  return {\n' +
            '    visibleItems,\n' +
            '    totalHeight,\n' +
            '    onScroll: (e) => setScrollTop(e.target.scrollTop),\n' +
            '  };\n' +
            '};',
    },
    {
        name: 'browser notification',
        description: 'Manages notifications within an application, allowing for the creation, display, and removal of alerts or messages.',
        usages: 'Useful for providing users with feedback about actions taken in the application, such as success messages, error alerts, or informational notices.',
        behavior: ' Provides methods to trigger notifications, customize their content and appearance, and automatically dismiss them after a specified duration.',
        keywords: [
            'push notification',
            'browser notification',
        ],
        codes: 'export const useNotification = (title, options = {}) => {\n' +
            '  const [permission, setPermission] = useState(Notification.permission);\n' +
            '\n' +
            '  const requestPermission = async () => {\n' +
            '    const result = await Notification.requestPermission();\n' +
            '    setPermission(result);\n' +
            '    return result;\n' +
            '  };\n' +
            '\n' +
            '  const showNotification = () => {\n' +
            '    if (permission === \'granted\') {\n' +
            '      return new Notification(title, options);\n' +
            '    }\n' +
            '  };\n' +
            '\n' +
            '  return {\n' +
            '    permission,\n' +
            '    requestPermission,\n' +
            '    showNotification,\n' +
            '  };\n' +
            '};',
    },
    {
        name: 'file upload',
        description: 'Manages file upload functionality, handling file selection, progress tracking, and error handling during the upload process.',
        usages: 'Useful for applications that require users to upload files, such as profile picture uploads, document submissions, or media galleries.',
        behavior: ' Provides methods to select files, track upload progress and handle success or error responses from the server.',
        keywords: [
            'file upload',
            'handle file uploading',
        ],
        codes: 'export const useFileUpload = (options = {}) => {\n' +
            '  const [files, setFiles] = useState([]);\n' +
            '  const [progress, setProgress] = useState(0);\n' +
            '  const [error, setError] = useState(null);\n' +
            '\n' +
            '  const upload = async (url, formData) => {\n' +
            '    try {\n' +
            '      const xhr = new XMLHttpRequest();\n' +
            '      \n' +
            '      xhr.upload.onprogress = (event) => {\n' +
            '        const percent = (event.loaded / event.total) * 100;\n' +
            '        setProgress(percent);\n' +
            '      };\n' +
            '\n' +
            '      xhr.onload = () => {\n' +
            '        if (xhr.status === 200) {\n' +
            '          setProgress(100);\n' +
            '        } else {\n' +
            '          setError(new Error(\'Upload failed\'));\n' +
            '        }\n' +
            '      };\n' +
            '\n' +
            '      xhr.onerror = () => {\n' +
            '        setError(new Error(\'Upload failed\'));\n' +
            '      };\n' +
            '\n' +
            '      xhr.open(\'POST\', url);\n' +
            '      xhr.send(formData);\n' +
            '    } catch (err) {\n' +
            '      setError(err);\n' +
            '    }\n' +
            '  };\n' +
            '\n' +
            '  return {\n' +
            '    files,\n' +
            '    setFiles,\n' +
            '    progress,\n' +
            '    error,\n' +
            '    upload,\n' +
            '  };\n' +
            '};',
    },
    {
        name: 'form validation',
        description: 'Manages form validation logic, ensuring that user input meets specified criteria and providing real-time feedback on validity.',
        usages: 'Useful for forms in applications that require user input, such as registration, login, or feedback forms.',
        behavior: 'Provides methods to define validation rules, track input values, check for errors, and display validation messages, enabling a smoother user experience.',
        keywords: [
            'form handling',
            'validate form',
        ],
        codes: 'export const useValidation = (initialValues, validationRules) => {\n' +
            '  const [values, setValues] = useState(initialValues);\n' +
            '  const [errors, setErrors] = useState({});\n' +
            '  const [isValid, setIsValid] = useState(false);\n' +
            '\n' +
            '  const validate = useCallback((name, value) => {\n' +
            '    const rules = validationRules[name];\n' +
            '    if (!rules) return true;\n' +
            '\n' +
            '    for (const rule of rules) {\n' +
            '      if (!rule.validator(value)) {\n' +
            '        return rule.message;\n' +
            '      }\n' +
            '    }\n' +
            '    return true;\n' +
            '  }, [validationRules]);\n' +
            '\n' +
            '  useEffect(() => {\n' +
            '    const newErrors = {};\n' +
            '    let valid = true;\n' +
            '\n' +
            '    Object.keys(values).forEach(key => {\n' +
            '      const result = validate(key, values[key]);\n' +
            '      if (result !== true) {\n' +
            '        newErrors[key] = result;\n' +
            '        valid = false;\n' +
            '      }\n' +
            '    });\n' +
            '\n' +
            '    setErrors(newErrors);\n' +
            '    setIsValid(valid);\n' +
            '  }, [values, validate]);\n' +
            '\n' +
            '  return {\n' +
            '    values,\n' +
            '    setValues,\n' +
            '    errors,\n' +
            '    isValid,\n' +
            '  };\n' +
            '};\n',
    },
    {
        name: 'handle progress',
        description: 'Tracks the progress of an operation, providing real-time updates on completion percentage and status.',
        usages: 'Useful for applications that perform long-running tasks, such as file uploads, downloads, or data processing, where users benefit from visual feedback on progress.',
        behavior: 'Provides methods to set, update, and reset progress values, along with callbacks to handle completion and error states, enhancing user engagement and experience.',
        keywords: [
            'progress calculate',
            'progressive bar',
        ],
        codes: 'export const useProgress = (steps, initialStep = 0) => {\n' +
            '  const [currentStep, setCurrentStep] = useState(initialStep);\n' +
            '  const progress = (currentStep / (steps - 1)) * 100;\n' +
            '\n' +
            '  return {\n' +
            '    currentStep,\n' +
            '    progress,\n' +
            '    nextStep: () => setCurrentStep(prev => Math.min(prev + 1, steps - 1)),\n' +
            '    prevStep: () => setCurrentStep(prev => Math.max(prev - 1, 0)),\n' +
            '    goToStep: (step) => setCurrentStep(Math.min(Math.max(step, 0), steps - 1)),\n' +
            '    isFirstStep: currentStep === 0,\n' +
            '    isLastStep: currentStep === steps - 1,\n' +
            '  };\n' +
            '};',
    },
    {
        name: 'portal',
        description: 'Simplifies the creation of React portals for rendering components outside the parent hierarchy.',
        usages: 'Useful for modals, tooltips, or overlays that need to escape overflow or positioning constraints.',
        behavior: 'Renders children into a specified DOM node, allowing for flexible UI positioning.',
        keywords: [
            'handle overly',
        ],
        codes: 'export const usePortal = (id = "portal") => {\n' +
            '    const rootElemRef = useRef(null);\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        const existingParent = document.querySelector(`#${id}`);\n' +
            '        const parentElem = existingParent || createRootElement(id);\n' +
            '\n' +
            '        if (!existingParent) {\n' +
            '            document.body.appendChild(parentElem);\n' +
            '        }\n' +
            '\n' +
            '        parentElem.appendChild(rootElemRef.current);\n' +
            '\n' +
            '        return () => {\n' +
            '            rootElemRef.current.remove();\n' +
            '            if (!parentElem.childNodes.length) {\n' +
            '                parentElem.remove();\n' +
            '            }\n' +
            '        };\n' +
            '    }, [id]);\n' +
            '\n' +
            '    function createRootElement(id) {\n' +
            '        const rootContainer = document.createElement("div");\n' +
            '        rootContainer.setAttribute("id", id);\n' +
            '        return rootContainer;\n' +
            '    }\n' +
            '\n' +
            '    function getRootElem() {\n' +
            '        if (!rootElemRef.current) {\n' +
            '            rootElemRef.current = document.createElement("div");\n' +
            '        }\n' +
            '        return rootElemRef.current;\n' +
            '    }\n' +
            '\n' +
            '    return getRootElem();\n' +
            '};',
    },
    {
        name: 'Debounce',
        description: 'Delays the updating of a value until after a specified delay period has passed.',
        usages: 'Useful for input fields to prevent excessive calls to a function, like API searches.',
        behavior: 'Returns the debounced value after the delay.',
        keywords: [
            'handle delay time',
            'debounce method'
        ],
        codes: 'function useDebounce(value, delay) {\n' +
            '    const [debouncedValue, setDebouncedValue] = useState(value);\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        const handler = setTimeout(() => {\n' +
            '            setDebouncedValue(value);\n' +
            '        }, delay);\n' +
            '\n' +
            '        return () => {\n' +
            '            clearTimeout(handler);\n' +
            '        };\n' +
            '    }, [value, delay]);\n' +
            '\n' +
            '    return debouncedValue;\n' +
            '}',
    },
    {
        name: 'Window Dimensions',
        description: 'Retrieves the current dimensions of the browser window.',
        usages: 'Useful for responsive layouts that need to adjust based on viewport size.\n',
        behavior: 'Updates dimensions when the window is resized.',
        keywords: [
            'calculate window dimensions',
        ],
        codes: 'export const useWindowDimensions = () => {\n' +
            '    const [windowDimensions, setWindowDimensions] = useState({\n' +
            '        width: window.innerWidth,\n' +
            '        height: window.innerHeight,\n' +
            '    });\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        const handleResize = () => {\n' +
            '            setWindowDimensions({\n' +
            '                width: window.innerWidth,\n' +
            '                height: window.innerHeight,\n' +
            '            });\n' +
            '        };\n' +
            '\n' +
            '        window.addEventListener(\'resize\', handleResize);\n' +
            '        return () => {\n' +
            '            window.removeEventListener(\'resize\', handleResize);\n' +
            '        };\n' +
            '    }, []);\n' +
            '\n' +
            '    return windowDimensions;\n' +
            '}',
    },
    {
        name: 'toggle',
        description: 'Provides a toggleable boolean state and a function to toggle it.',
        usages: 'Useful for managing simple toggle states, such as showing/hiding components.',
        behavior: 'Returns the current state and a function to toggle it.',
        keywords: [
            'toggle',
        ],
        codes: 'export const useToggle = (initialValue = false) => {\n' +
            '    const [state, setState] = useState(initialValue);\n' +
            '    const toggle = () => setState((prev) => !prev);\n' +
            '    return [state, toggle];\n' +
            '}',
    },
]
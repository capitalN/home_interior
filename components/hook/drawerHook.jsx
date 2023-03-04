import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

const useDrawerHook = () => {
const { isOpen, onOpen, onClose } = useDisclosure();
// const [drawer, setDrawer] = useState({isOpen,onOpen, onClose})

return [isOpen, onOpen, onClose]
}

export default useDrawerHook
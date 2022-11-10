import { useEffect, useState, useMemo } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

const useCustom = () => {
  const [open, setOpen] = useState(true)
  const [currentPath, setPath] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const { detail, id } = useParams<any>()
  const handleDrawer = () => {
    setOpen(!open)
  }
  const pushHistory = (path) => {
    navigate(path)
  }
  const firstPath = useMemo(() => location.pathname.split('/')[1], [location])

  useEffect(() => {
    setPath(location.pathname)
  }, [location])

  return {
    data: {
      open,
      currentPath,
      firstPath,
      detail,
      id,
    },
    methods: {
      handleDrawer,
      pushHistory,
    },
  }
}

export default useCustom

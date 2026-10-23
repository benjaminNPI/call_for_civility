import React from 'react'
import useScript, { ScriptStatus } from '@charlietango/use-script'

const JotForm = () => {
  const [ready, status] = useScript('https://form.jotform.com/jsform/213167811339052')

  if (status === ScriptStatus.ERROR) {
    return <div>Failed to load Google API</div>
  }

  return <div>Google API Ready: {ready}</div>
}

export default JotForm
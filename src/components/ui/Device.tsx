import { useEffect, useRef, useState } from "react"

type Scene = {
  id: string
  title: string
  language: string
  fileName: string
  codeLines: string[]
  terminalLines: string[]
  explorerFiles: string[]
}

const pythonCode = [
  "import pandas as pd",
  "import numpy as np",
  "def process(data):",
  "    return data.dropna()",
]

const nodeCode = [
  "export async function getProjects(req, res) {",
  "  const projects = await projectService.findAll()",
  "  return res.json(projects)",
  "}",
]

const sqlCode = [
  "SELECT",
  "    id,",
  "    name,",
  "    status",
  "FROM projects",
  "ORDER BY created_at DESC;",
]

const dockerCode = [
  "services:",
  "  api:",
  "    build: .",
  "    ports:",
  "      - \"3000:3000\"",
  "  postgres:",
  "    image: postgres:16",
]

const pythonTerminal = [
  "$ python pipeline.py",
  "Processing dataset...",
  "✓ pipeline completed",
]

const nodeTerminal = [
  "$ npm run dev",
  "Starting API...",
  "✓ Server listening on :3000",
]

const sqlTerminal = [
  "$ psql portfolio",
  "Connected to PostgreSQL",
  "3 rows returned",
  "✓ query completed",
]

const dockerTerminal = [
  "$ docker compose up -d",
  "Creating api...",
  "Creating postgres...",
  "✓ containers running",
]

const pythonExplorer = ["data/", "scripts/", "utils/"]
const nodeExplorer = ["routes/", "controllers/", "services/"]
const sqlExplorer = ["migrations/", "seeds/"]
const dockerExplorer = ["Dockerfile", "docker-compose.yml"]

const scenes: Scene[] = [
  {
    id: "python",
    title: "Python / Data",
    language: "Python",
    fileName: "pipeline.py",
    codeLines: pythonCode,
    terminalLines: pythonTerminal,
    explorerFiles: pythonExplorer,
  },
  {
    id: "node",
    title: "Node.js / API",
    language: "TypeScript",
    fileName: "projects.controller.ts",
    codeLines: nodeCode,
    terminalLines: nodeTerminal,
    explorerFiles: nodeExplorer,
  },
  {
    id: "sql",
    title: "SQL / Database",
    language: "SQL",
    fileName: "projects.sql",
    codeLines: sqlCode,
    terminalLines: sqlTerminal,
    explorerFiles: sqlExplorer,
  },
  {
    id: "docker",
    title: "Docker / Infra",
    language: "Docker",
    fileName: "docker-compose.yml",
    codeLines: dockerCode,
    terminalLines: dockerTerminal,
    explorerFiles: dockerExplorer,
  },
]

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function Device() {
  const [index, setIndex] = useState(0)
  const [revealPos, setRevealPos] = useState(0)
  const [terminalPos, setTerminalPos] = useState(0)
  const [explorerPos, setExplorerPos] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = rootRef.current
    if (!element || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!isVisible) return
    const sceneTimer = window.setInterval(() => {
      setIndex((i) => (i + 1) % scenes.length)
    }, 5000)
    return () => window.clearInterval(sceneTimer)
  }, [isVisible])

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!isVisible) return
    const codeTimer = window.setInterval(() => {
      if (revealPos < scenes[index].codeLines.length - 1) {
        setRevealPos((r) => r + 1)
      }
    }, 60)
    return () => window.clearInterval(codeTimer)
  }, [index, isVisible])

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!isVisible) return
    const terminalTimer = window.setInterval(() => {
      if (terminalPos < scenes[index].terminalLines.length - 1) {
        setTerminalPos((r) => r + 1)
      }
    }, 700)
    return () => window.clearInterval(terminalTimer)
  }, [index, isVisible])

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!isVisible) return
    const explorerTimer = window.setInterval(() => {
      if (explorerPos < scenes[index].explorerFiles.length - 1) {
        setExplorerPos((r) => r + 1)
      }
    }, 800)
    return () => window.clearInterval(explorerTimer)
  }, [index, isVisible])

  // Reset animation state when scene changes
  useEffect(() => {
    setRevealPos(0)
    setTerminalPos(0)
    setExplorerPos(0)
  }, [index])

  const currentScene = scenes[index]

  return (
    <div ref={rootRef} className="device" aria-hidden="true">
      <div className="device-glow" />
      <div className="device-body">
        <div className="device-screen">
          <div className="device-screen-inner">
            <div className="lab-notebook">
              <div className="lab-notebook-header">
                <span className="lab-notebook-status">
                  <span className="lab-led" />
                  SYSTEM ONLINE
                </span>
              </div>
              <div className="lab-notebook-screen">
                <div className="lab-vscode-layout">
                  <aside className="lab-explorer">
                    <p className="lab-explorer-label">PROJECT</p>
                    <div className="lab-tree">
                      {currentScene.explorerFiles.map((file, i) => (
                        <p
                          key={file}
                          className={`lab-tree-row ${i === explorerPos ? "lab-tree-selected" : ""}`}
                        >
                          <span className="lab-tree-branch" />
                          {file}
                        </p>
                      ))}
                    </div>
                  </aside>
                  <div className="lab-editor">
                    <div className="lab-editor-header">
                      <span className="lab-file-name">
                        {currentScene.fileName}
                      </span>
                      <span className="lab-editor-actions">
                        <span className="lab-action lab-action-close" />
                        <span className="lab-action lab-action-minimize" />
                        <span className="lab-action lab-action-maximize" />
                      </span>
                    </div>
                    <div className="lab-editor-tab">
                      <span className="lab-editor-dot" />
                      {currentScene.language}
                    </div>
                    <div className="lab-code">
                      {currentScene.codeLines.map((line, i) => (
                        <p
                          key={line}
                          className={`lab-code-row ${i === revealPos ? "lab-code-cursor" : ""}`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <div className="lab-status-bar">
                      <span>
                        Ln{" "}
                          {revealPos + 1},
                          Col{" "}
                          {Math.min(revealPos, 3) + 1}
                        {" "}
                      </span>
                      <span>
                        {" "}
                        {currentScene.language}{" "}
                        {" "}
                      </span>
                      <span className="lab-caret-reader" />
                    </div>
                    <div className="lab-cursor-line" />
                  </div>
                  <div className="lab-terminal">
                    <p className="lab-terminal-line">
                      <span className="lab-terminal-prompt">$</span>
                      {currentScene.terminalLines[terminalPos % currentScene.terminalLines.length]}
                      <span className="lab-caret" />
                    </p>
                    <p className="lab-terminal-out">
                      {currentScene.terminalLines[terminalPos % currentScene.terminalLines.length]}
                      <span className="lab-caret" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="device-hinge" />
        <div className="device-base">
          <div className="device-keys" />
          <div className="device-trackpad" />
        </div>
      </div>
    </div>
  )
}
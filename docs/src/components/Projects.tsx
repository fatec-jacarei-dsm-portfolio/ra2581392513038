import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'

const academicProjects = [
  {
    title: 'Sistema de Gestão de Horários Acadêmicos',
    desc: 'Sistema web desenvolvido para otimizar a gestão de horários acadêmicos da FATEC Jacareí, modernizando o processo de divulgação e consulta de grades horárias por meio de uma plataforma digital integrada. Função: Scrum Master e Desenvolvedor Frontend.',
    demo: 'https://github.com/ErrorSquad-ABP/Gerenciamento_Pedagogico-Documentacao', 
    code: 'https://github.com/ErrorSquad-ABP/Gerenciamento_Pedagogico-Documentacao'
  },
  {
    title: 'Sistema de Visualização e Disseminação de Dados Limnológicos',
    desc: 'Projeto acadêmico ABP desenvolvido na FATEC Jacareí, no curso de Desenvolvimento de Software Multiplataforma (DSM). Sistema para visualização e disseminação de dados limnológicos.',
    demo: 'https://github.com/ExceptionH4ndlers/ABP_2DSM',
    code: 'https://github.com/ExceptionH4ndlers/ABP_2DSM'
  }
]

const professionalProjects = [
  {
    title: 'ATENA - Sistema de Detecção de EPIs',
    desc: 'Sistema de visão computacional para detecção e validação de Equipamentos de Proteção Individual (EPIs) usando YOLOv5n. Detecta pessoas como âncora principal e valida o posicionamento correto de capacetes e coletes.',
    demo: 'https://github.com/JV-L0pes/ATENA',
    code: 'https://github.com/JV-L0pes/ATENA'
  },
  {
    title: 'Sistema de Reconhecimento Facial para Controle de Acesso',
    desc: 'Sistema completo de reconhecimento facial com detecção de liveness para controle de acesso, desenvolvido em Python com FastAPI e interface web moderna. Utiliza RetinaFace, ArcFace e FAISS para busca eficiente.',
    demo: 'https://github.com/JV-L0pes/Facial-Detect',
    code: 'https://github.com/JV-L0pes/Facial-Detect'
  },
  {
    title: 'AllTech Digital',
    desc: 'Site institucional com formulário de contato integrado a banco PostgreSQL e envio de emails via SendGrid. Plataforma moderna e responsiva para apresentação de serviços digitais.',
    demo: 'https://github.com/JV-L0pes/AllTech-Site',
    code: 'https://github.com/JV-L0pes/AllTech-Site'
  },
  {
    title: 'Shomer',
    desc: 'Projeto profissional desenvolvido para segurança e monitoramento.',
    demo: 'https://github.com/JV-L0pes/Shomer',
    code: 'https://github.com/JV-L0pes/Shomer'
  }
]

const personalProjects = [
  {
    title: 'Inbox Copilot AutoU',
    desc: 'Ferramenta de automação para gerenciamento de emails e inbox, desenvolvida para otimizar o fluxo de trabalho e aumentar a produtividade no tratamento de mensagens.',
    demo: 'https://github.com/JV-L0pes/Inbox-Copilot-AutoU',
    code: 'https://github.com/JV-L0pes/Inbox-Copilot-AutoU'
  },
  {
    title: 'EPI-YOLO11',
    desc: 'Sistema de detecção de EPIs utilizando YOLO11, versão atualizada do modelo de detecção de objetos para identificação e validação de equipamentos de proteção individual.',
    demo: 'https://github.com/JV-L0pes/EPI-YOLO11',
    code: 'https://github.com/JV-L0pes/EPI-YOLO11'
  },
  {
    title: 'SQL to Diagram',
    desc: 'Ferramenta para converter scripts SQL em diagramas visuais, facilitando a compreensão e documentação de bancos de dados. Gera representações gráficas de esquemas de banco de dados a partir de código SQL.',
    demo: 'https://github.com/JV-L0pes/sql-to-diagram',
    code: 'https://github.com/JV-L0pes/sql-to-diagram'
  }
]

function ProjectCard({ title, desc, demo, code, t }: { title: string, desc: string, demo: string, code: string, t: any }) {
  return (
    <div className="card card-hover p-6 flex flex-col">
      <h3 className="text-xl text-primary mb-2">{title}</h3>
      <p className="text-muted mb-4">{desc}</p>
      <div className="mt-auto flex gap-3">
        <a className="btn btn-primary" target="_blank" rel="noreferrer" href={demo}>{t('projects.viewProject')}</a>
        <a className="btn btn-outline" target="_blank" rel="noreferrer" href={code}>{t('projects.code')}</a>
      </div>
    </div>
  )
}

export default function Projects(){
  const { t } = useTranslation()
  
  return (
    <section id="projects" className="section">
      <div className="container-max">
        <SectionHeader title={t('projects.title')} />
        
        {/* Projetos Acadêmicos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">{t('projects.academic')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {academicProjects.map(p => (
              <ProjectCard key={p.title} {...p} t={t} />
            ))}
          </div>
        </div>

        {/* Projetos Profissionais */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">{t('projects.professional')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {professionalProjects.map(p => (
              <ProjectCard key={p.title} {...p} t={t} />
            ))}
          </div>
        </div>

        {/* Projetos Pessoais */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">{t('projects.personal')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map(p => (
              <ProjectCard key={p.title} {...p} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

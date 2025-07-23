import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// Komponent do obsługi obrazów w Markdown
const Image = ({ src, alt, ...props }) => {
  // Jeśli src zaczyna się od /, to jest to ścieżka względna do public
  const imageSrc = src.startsWith('/') ? src : `/portfolio/projects/${src}`;
  
  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      className="max-w-full h-auto rounded-lg shadow-md my-4"
      {...props}
    />
  );
};

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        console.log('Ładowanie projektu ID:', id);
        const response = await fetch(`/portfolio/projects/project-${id}.md`);
        console.log('Status odpowiedzi:', response.status);
        if (response.ok) {
          const content = await response.text();
          console.log('Zawartość pliku:', content.substring(0, 100) + '...');
          setMarkdownContent(content);
        } else {
          console.error('Błąd HTTP:', response.status, response.statusText);
          setMarkdownContent('# Projekt nie został znaleziony\n\nProjekt o podanym ID nie istnieje.');
        }
      } catch (error) {
        console.error('Błąd podczas ładowania pliku Markdown:', error);
        setMarkdownContent('# Błąd ładowania\n\nNie udało się załadować szczegółów projektu.');
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [id]);

  useEffect(() => {
    const handlePopState = () => {
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500">Ładowanie projektu {id}...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="text-sm text-gray-500 underline mb-6 block text-left"
        >
          Powrót do portfolio
        </button>
        
        <div className="prose prose-gray max-w-none">
          {markdownContent ? (
            <ReactMarkdown 
              components={{ img: Image }}
              remarkPlugins={[]}
              rehypePlugins={[rehypeRaw]}
            >
              {markdownContent}
            </ReactMarkdown>
          ) : (
            <div className="text-red-500">Brak zawartości do wyświetlenia</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 
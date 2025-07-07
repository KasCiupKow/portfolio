import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Komponent do obsługi obrazów w Markdown
const Image = ({ src, alt, ...props }) => {
  // Jeśli src zaczyna się od /, to jest to ścieżka względna do public
  const imageSrc = src.startsWith('/') ? src : `/projects/${src}`;
  
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
        const response = await fetch(`/projects/project-${id}.md`);
        if (response.ok) {
          const content = await response.text();
          setMarkdownContent(content);
        } else {
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
          <div className="text-gray-500">Ładowanie...</div>
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
          <ReactMarkdown components={{ img: Image }}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 
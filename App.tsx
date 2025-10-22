import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileSection } from './components/ProfileSection';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { ContactInfo } from './components/ContactInfo';

// ==================== INTERFACES ====================
interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface Skill {
  id: string;
  emoji: string;
  name: string;
}

interface Project {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
}

// ==================== TUS DATOS ====================
const personalInfo = {
  name: 'Kevin Pinto',
  title: 'Desarrollador Full Stack',
  avatar: require('./assets/Foto Cv.jpg'),
  bio: 'Apasionado por la tecnología y el desarrollo de software. Me especializo en crear aplicaciones web y móviles con React, Node.js y React Native. Siempre buscando aprender nuevas tecnologías y enfrentar desafíos interesantes.',
};

const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'pintokevin243@gmail.com' },
  { icon: '📍', label: 'Ubicación', value: 'Bogotá D.C, Colombia' },
  { icon: '🔗', label: 'GitHub', value: 'github.com/Bykevin10' },
];

const skills: Skill[] = [
  { id: '1', emoji: '⚛️', name: 'React Native' },
  { id: '2', emoji: '🚀', name: 'React.js' },
  { id: '3', emoji: '📘', name: 'TypeScript' },
  { id: '4', emoji: '🎨', name: 'TailwindCSS' },
  { id: '5', emoji: '📱', name: 'Expo' },
  { id: '6', emoji: '💻', name: 'Node.js' },
];

const projects: Project[] = [
  {
    id: '1',
    emoji: '👤',
    title: 'Portfolio Personal',
    description: 'Aplicación móvil para mostrar mi perfil profesional, habilidades y proyectos realizados.',
    tags: ['React Native', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: '2',
    emoji: '🛒',
    title: 'E-commerce Móvil',
    description: 'App de compras con carrito, búsqueda y pasarela de pagos integrada.',
    tags: ['React Native', 'Firebase', 'Stripe API'],
  },
  {
    id: '3',
    emoji: '🎵',
    title: 'Reproductor de Música',
    description: 'Aplicación para reproducir música local con controles avanzados y playlist personalizada.',
    tags: ['React Native', 'Audio API', 'UI/UX Design'],
  },
];

// ==================== COMPONENTE PRINCIPAL ====================
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        
        {/* HEADER CORREGIDO - Sin gradiente */}
        <View className="bg-primary-700 h-48 items-center justify-center">
          <Text className="text-white text-2xl font-bold tracking-wide">MI APP PERSONAL</Text>
          <Text className="text-primary-200 text-sm mt-1">Desarrollador React Native</Text>
        </View>

        {/* CONTENIDO PRINCIPAL */}
        <View className="px-5">
          
          {/* PERFIL */}
          <ProfileSection
            name={personalInfo.name}
            title={personalInfo.title}
            avatar={personalInfo.avatar}
            bio={personalInfo.bio}
          />

          {/* SEPARADOR PARA CONTACTO */}
          <View className="flex-row items-center justify-center my-6">
            <View className="w-16 h-px bg-gray-300" />
            <Text className="mx-4 text-primary-600 font-semibold text-center">Contacto</Text>
            <View className="w-16 h-px bg-gray-300" />
          </View>

          {/* CONTACTO */}
          <ContactInfo contacts={contacts} />

          {/* SEPARADOR PARA HABILIDADES */}
          <View className="flex-row items-center justify-center my-6">
            <View className="w-16 h-px bg-gray-300" />
            <Text className="mx-4 text-primary-600 font-semibold text-center">Habilidades</Text>
            <View className="w-16 h-px bg-gray-300" />
          </View>

          {/* HABILIDADES */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-2xl font-bold text-primary-900">
                💪 Mis Habilidades
              </Text>
              <Text className="text-accent-600 font-semibold bg-accent-50 px-3 py-1 rounded-full">
                {skills.length} skills
              </Text>
            </View>
            {skills.map((skill) => (
              <SkillCard 
                key={skill.id}
                emoji={skill.emoji} 
                name={skill.name} 
              />
            ))}
          </View>

          {/* SEPARADOR PARA PROYECTOS */}
          <View className="flex-row items-center justify-center my-6">
            <View className="w-16 h-px bg-gray-300" />
            <Text className="mx-4 text-primary-600 font-semibold text-center">Proyectos</Text>
            <View className="w-16 h-px bg-gray-300" />
          </View>

          {/* PROYECTOS */}
          <View className="mb-10">
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-2xl font-bold text-primary-900">
                🚀 Mis Proyectos
              </Text>
              <Text className="text-accent-600 font-semibold bg-accent-50 px-3 py-1 rounded-full">
                {projects.length} proyectos
              </Text>
            </View>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                emoji={project.emoji}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube, Mail, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

function App() {
  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 ¡Próximamente!",
      description: `Nuestra página de ${platform} aún no está lista, ¡pero no te preocupes! ¡Puedes solicitarla en tu próxima indicación! 🚀`,
      duration: 4000,
    });
  };

  const handleNotifyClick = () => {
    toast({
      title: "🚧 ¡Función de Notificación Próximamente!",
      description: "Las notificaciones por correo electrónico aún no están implementadas, ¡pero no te preocupes! ¡Puedes solicitarlas en tu próxima indicación! 🚀",
      duration: 4000,
    });
  };

  return (
    <>
      <Helmet>
        <title>RifasBs - Próximamente | Vive la mejor experiencia en sorteos online</title>
        <meta name="description" content="Prepárate para la plataforma de sorteos más emocionante. Únete a nuestra comunidad y sé el primero en saber cuándo lanzamos. Síguenos en redes sociales para actualizaciones exclusivas." />
        <meta property="og:title" content="RifasBs - Próximamente | Vive la mejor experiencia en sorteos online" />
        <meta property="og:description" content="Prepárate para la plataforma de sorteos más emocionante. Únete a nuestra comunidad y sé el primero en saber cuándo lanzamos." />
      </Helmet>
      
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-500 rounded-full floating-animation opacity-60" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-400 rounded-full floating-animation opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-300 rounded-full floating-animation opacity-50" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-green-500 rounded-full floating-animation opacity-30" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4"
            >
              <div className="inline-flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 glow-effect">
                <img  alt="RifasBs" src="/images/logo-completo.png" />
              </div>
             
            </motion.div>

            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 font-gilroy"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Vive la mejor experiencia en sorteos online
                <span className="gradient-text"> Próximamente</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Prepárate para la plataforma de sorteos más emocionante y justa jamás creada. 
                ¡Únete a miles de ganadores en el juego de azar definitivo!
              </p>
            </motion.div>

            {/* Features Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Justo y Transparente</h3>
                <p className="text-gray-400">La selección aleatoria verificada por blockchain asegura que cada sorteo sea completamente justo</p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Premios Increíbles</h3>
                <p className="text-gray-400">Desde recompensas en efectivo hasta artículos de lujo, descubre premios increíbles a diario</p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Resultados Instantáneos</h3>
                <p className="text-gray-400">Notificaciones en tiempo real y distribución instantánea de premios</p>
              </div>
            </motion.div>

            {/* Notify Me Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-6"
            >
              <Button 
                onClick={handleNotifyClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg rounded-xl glow-effect social-hover"
              >
                <Bell className="w-5 h-5 mr-2" />
                Notifícame Cuando Lancemos
              </Button>
              <p className="text-gray-400 text-sm">¡Sé el primero en unirte cuando estemos en vivo!</p>
            </motion.div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Sigue Nuestro Viaje</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Mantente conectado y obtén actualizaciones exclusivas, contenido detrás de escena, 
                  y oportunidades de acceso anticipado siguiéndonos en redes sociales.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <Button
                  onClick={() => handleSocialClick('Instagram')}
                  variant="outline"
                  className="bg-gray-900/50 border-gray-700 hover:border-green-500 hover:bg-green-500/10 text-white social-hover"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
                
                <Button
                  onClick={() => handleSocialClick('Twitter')}
                  variant="outline"
                  className="bg-gray-900/50 border-gray-700 hover:border-green-500 hover:bg-green-500/10 text-white social-hover"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </Button>
                
                <Button
                  onClick={() => handleSocialClick('Facebook')}
                  variant="outline"
                  className="bg-gray-900/50 border-gray-700 hover:border-green-500 hover:bg-green-500/10 text-white social-hover"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </Button>
                
                <Button
                  onClick={() => handleSocialClick('YouTube')}
                  variant="outline"
                  className="bg-gray-900/50 border-gray-700 hover:border-green-500 hover:bg-green-500/10 text-white social-hover"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </Button>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="pt-12 border-t border-gray-800"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contacto@rifas-bs.com</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
                <span>© 2025 RifasBs. Todos los derechos reservados.</span>
              </div>
            </motion.div>

          </div>
        </div>

        <Toaster />
      </div>
    </>
  );
}

export default App;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, Phone, Instagram, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/30">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-width-6xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <Cookie className="h-16 w-16 text-primary animate-pulse" />
            </div>
            <h1 className="mb-6 text-5xl md:text-7xl font-bold text-foreground">
              Mel y Miel
            </h1>
            <p className="mb-8 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Endulzando tu vida con amor y dedicación
            </p>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                🎃 Especial Halloween 🎃
              </h2>
              <p className="text-lg md:text-xl text-foreground">
                Galletas decoradas temáticas para celebrar este Halloween
              </p>
            </div>
            <a className="text-lg px-8 py-6" href="#products-container">
              Ver Catálogo
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
      </header>

      {/* Halloween Special Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Galletas de Halloween 2024
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 text-center">🎃</div>
              <h3 className="text-2xl font-semibold mb-3 text-center text-card-foreground">
                Calabazas Decoradas
              </h3>
              <p className="text-muted-foreground text-center">
                Galletas artesanales con diseños únicos de calabazas terroríficas y divertidas
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 text-center">👻</div>
              <h3 className="text-2xl font-semibold mb-3 text-center text-card-foreground">
                Fantasmas Glaseados
              </h3>
              <p className="text-muted-foreground text-center">
                Deliciosas galletas con glaseado real y decoraciones espeluznantes
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 text-center">🦇</div>
              <h3 className="text-2xl font-semibold mb-3 text-center text-card-foreground">
                Sets Temáticos
              </h3>
              <p className="text-muted-foreground text-center">
                Cajas personalizadas con variedad de diseños para tus fiestas
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Nuestra Pasión
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En Mel y Miel nos especializamos en crear momentos dulces e inolvidables. 
              Elaboramos galletas decoradas, cupcakes, tortas y una variedad de postres 
              artesanales con ingredientes de primera calidad. Cada creación está hecha 
              con amor y dedicación para endulzar tus celebraciones más especiales.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-5xl mb-3">🍰</div>
                <h3 className="font-semibold text-lg text-foreground">Tortas</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🧁</div>
                <h3 className="font-semibold text-lg text-foreground">Cupcakes</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🍪</div>
                <h3 className="font-semibold text-lg text-foreground">Galletas</h3>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Contáctanos
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">Contáctanos para pedidos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Instagram className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Instagram</h3>
                    <p className="text-muted-foreground">@melymiel</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Email</h3>
                    <p className="text-muted-foreground">contacto@melymiel.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Ubicación</h3>
                    <p className="text-muted-foreground">Hacemos entregas a domicilio</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" className="w-full md:w-auto" onClick={() => window.open('https://www.instagram.com/melymiel.ec')}>
                  Hacer un Pedido
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Index;

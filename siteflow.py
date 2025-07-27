from flask import Blueprint, request, jsonify
import requests
import openai
import os
from urllib.parse import urlparse

siteflow_bp = Blueprint('siteflow', __name__)

# Configuração da OpenAI
openai.api_key = os.getenv('OPENAI_API_KEY')

@siteflow_bp.route('/analyze-site', methods=['POST'])
def analyze_site():
    """Analisa um site e retorna diagnóstico básico de SEO"""
    try:
        data = request.get_json()
        site_url = data.get('url')
        niche = data.get('niche')
        objective = data.get('objective')
        
        if not site_url:
            return jsonify({'error': 'URL é obrigatória'}), 400
        
        # Validar URL
        parsed_url = urlparse(site_url)
        if not parsed_url.scheme or not parsed_url.netloc:
            return jsonify({'error': 'URL inválida'}), 400
        
        # Análise básica do site (simulada para o MVP)
        analysis_result = {
            'url': site_url,
            'niche': niche,
            'objective': objective,
            'seo_score': 75,
            'performance_score': 82,
            'mobile_friendly': True,
            'https_enabled': parsed_url.scheme == 'https',
            'issues': [
                'Meta description ausente em algumas páginas',
                'Imagens sem alt text',
                'Velocidade de carregamento pode ser melhorada'
            ],
            'recommendations': [
                'Otimizar meta tags das páginas principais',
                'Adicionar alt text em todas as imagens',
                'Implementar cache de navegador',
                'Criar conteúdo focado em palavras-chave de cauda longa'
            ]
        }
        
        return jsonify(analysis_result)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@siteflow_bp.route('/generate-keywords', methods=['POST'])
def generate_keywords():
    """Gera sugestões de palavras-chave usando IA"""
    try:
        data = request.get_json()
        niche = data.get('niche')
        objective = data.get('objective')
        
        if not niche:
            return jsonify({'error': 'Nicho é obrigatório'}), 400
        
        # Prompt para geração de palavras-chave
        prompt = f"""
        Gere 15 palavras-chave de cauda longa para um negócio do nicho "{niche}" 
        com objetivo de "{objective}". 
        
        Para cada palavra-chave, forneça:
        - A palavra-chave
        - Volume de busca estimado (baixo/médio/alto)
        - Dificuldade (fácil/médio/difícil)
        - Intenção de busca (informacional/comercial/transacional)
        
        Formato de resposta em JSON:
        {{
            "keywords": [
                {{
                    "keyword": "exemplo palavra-chave",
                    "search_volume": "médio",
                    "difficulty": "fácil",
                    "intent": "comercial"
                }}
            ]
        }}
        """
        
        # Simulação da resposta da IA (para o MVP)
        keywords_result = {
            "keywords": [
                {
                    "keyword": f"como escolher {niche} online",
                    "search_volume": "médio",
                    "difficulty": "fácil",
                    "intent": "informacional"
                },
                {
                    "keyword": f"melhor {niche} para iniciantes",
                    "search_volume": "alto",
                    "difficulty": "médio",
                    "intent": "comercial"
                },
                {
                    "keyword": f"{niche} com desconto",
                    "search_volume": "médio",
                    "difficulty": "fácil",
                    "intent": "transacional"
                },
                {
                    "keyword": f"onde comprar {niche} barato",
                    "search_volume": "alto",
                    "difficulty": "médio",
                    "intent": "transacional"
                },
                {
                    "keyword": f"dicas de {niche} para 2025",
                    "search_volume": "baixo",
                    "difficulty": "fácil",
                    "intent": "informacional"
                }
            ]
        }
        
        return jsonify(keywords_result)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@siteflow_bp.route('/generate-content', methods=['POST'])
def generate_content():
    """Gera sugestões de conteúdo usando IA"""
    try:
        data = request.get_json()
        niche = data.get('niche')
        content_type = data.get('type', 'blog')  # blog, social, email
        
        if not niche:
            return jsonify({'error': 'Nicho é obrigatório'}), 400
        
        # Simulação de geração de conteúdo
        if content_type == 'blog':
            content_suggestions = [
                f"10 Tendências de {niche} para 2025",
                f"Como Escolher o Melhor {niche}: Guia Completo",
                f"Erros Comuns ao Comprar {niche} e Como Evitá-los",
                f"O Futuro do {niche}: O Que Esperar",
                f"Comparativo: {niche} Premium vs Básico"
            ]
        elif content_type == 'social':
            content_suggestions = [
                f"💡 Dica rápida sobre {niche}",
                f"🔥 Tendência quente em {niche}",
                f"❓ Você sabia que {niche}...",
                f"✅ Checklist essencial para {niche}",
                f"🎯 Mito ou verdade sobre {niche}"
            ]
        else:  # email
            content_suggestions = [
                f"Bem-vindo ao mundo do {niche}",
                f"Sua jornada em {niche} começa aqui",
                f"Dicas exclusivas de {niche}",
                f"Oferta especial para {niche}",
                f"Últimas novidades em {niche}"
            ]
        
        return jsonify({
            'content_type': content_type,
            'suggestions': content_suggestions
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@siteflow_bp.route('/generate-ads', methods=['POST'])
def generate_ads():
    """Gera sugestões de anúncios para Google Ads e Meta Ads"""
    try:
        data = request.get_json()
        niche = data.get('niche')
        objective = data.get('objective')
        platform = data.get('platform', 'google')  # google, meta
        
        if not niche or not objective:
            return jsonify({'error': 'Nicho e objetivo são obrigatórios'}), 400
        
        # Simulação de geração de anúncios
        if platform == 'google':
            ads_suggestions = {
                'headlines': [
                    f"Melhor {niche} do Brasil",
                    f"{niche} com 50% de Desconto",
                    f"Compre {niche} Online Agora"
                ],
                'descriptions': [
                    f"Encontre o {niche} ideal para você. Entrega rápida e segura.",
                    f"Ofertas imperdíveis em {niche}. Aproveite enquanto durar!"
                ],
                'keywords': [
                    f"{niche} online",
                    f"comprar {niche}",
                    f"{niche} barato"
                ],
                'estimated_cpc': 'R$ 1,50 - R$ 3,00',
                'estimated_reach': '10.000 - 50.000 pessoas'
            }
        else:  # meta
            ads_suggestions = {
                'primary_text': f"Descubra o melhor {niche} para suas necessidades. Ofertas exclusivas por tempo limitado!",
                'headline': f"Melhor {niche} do Brasil",
                'description': f"Qualidade garantida em {niche}",
                'call_to_action': 'Saiba Mais' if objective == 'leads' else 'Comprar Agora',
                'target_audience': f"Pessoas interessadas em {niche}, 25-55 anos",
                'estimated_reach': '15.000 - 75.000 pessoas',
                'estimated_cost': 'R$ 50 - R$ 200 por dia'
            }
        
        return jsonify({
            'platform': platform,
            'ads': ads_suggestions
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@siteflow_bp.route('/dashboard-data', methods=['GET'])
def get_dashboard_data():
    """Retorna dados para o dashboard"""
    try:
        # Simulação de dados do dashboard
        dashboard_data = {
            'metrics': {
                'total_traffic': 12430,
                'conversions': 1207,
                'revenue': 45231,
                'conversion_rate': 9.7
            },
            'traffic_data': [
                {'name': 'Jan', 'visits': 4000, 'conversions': 240},
                {'name': 'Fev', 'visits': 3000, 'conversions': 139},
                {'name': 'Mar', 'visits': 2000, 'conversions': 980},
                {'name': 'Abr', 'visits': 2780, 'conversions': 390},
                {'name': 'Mai', 'visits': 1890, 'conversions': 480},
                {'name': 'Jun', 'visits': 2390, 'conversions': 380}
            ],
            'traffic_sources': [
                {'name': 'Orgânico', 'value': 45, 'color': '#2563EB'},
                {'name': 'Pago', 'value': 30, 'color': '#10B981'},
                {'name': 'Social', 'value': 15, 'color': '#F59E0B'},
                {'name': 'Direto', 'value': 10, 'color': '#EF4444'}
            ],
            'recommendations': [
                {
                    'title': 'Otimizar meta tags da página inicial',
                    'impact': 'Alto',
                    'effort': 'Baixo',
                    'status': 'completed'
                },
                {
                    'title': 'Criar campanha no Google Ads',
                    'impact': 'Alto',
                    'effort': 'Médio',
                    'status': 'in_progress'
                },
                {
                    'title': 'Publicar 3 posts no Instagram',
                    'impact': 'Médio',
                    'effort': 'Baixo',
                    'status': 'pending'
                },
                {
                    'title': 'Configurar sequência de e-mail marketing',
                    'impact': 'Alto',
                    'effort': 'Alto',
                    'status': 'pending'
                }
            ]
        }
        
        return jsonify(dashboard_data)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


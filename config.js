/**
 * КОНФИГУРАЦИОННЫЙ ФАЙЛ ПОРТФОЛИО
 */
const CURRENT_YEAR = new Date().getFullYear();

window.PORTFOLIO_CONFIG = {
  // 1. ОБЩИЕ ДАННЫЕ И ССЫЛКИ
  general: {
    avatar: "foto.jpeg", // Рекомендуется убрать пробелы в имени файла на диске
    email: "dev.suleymanov@gmail.com",
    telegramUrl: "https://t.me/javarrior",
    githubUrl: "https://github.com/dev-suleymanov"
  },

  // 2. НАВИГАЦИОННАЯ ПАНЕЛЬ
  navbar: {
    ru: { about: "Обо мне", skills: "Стек", languages: "Языки", experience: "Опыт", contact: "Связь" },
    en: { about: "About", skills: "Stack", languages: "Languages", experience: "Experience", contact: "Contact" }
  },

  // 3. СЕКЦИЯ HERO (ГЛАВНЫЙ ЭКРАН)
  hero: {
    ru: {
      title: "Привет, я Рустам.<br>Java / Backend Developer.",
      lead: "Java-разработчик с опытом создания микросервисов на стеке Spring Boot, PostgreSQL, Redis и Kafka. Проектирую надежные REST API и оптимизирую работу баз данных так, чтобы сервисы стабильно держали высокие нагрузки.",
      avatarTitle: "Нажмите, чтобы увеличить",
      avatarAlt: "Рустам Сулейманов"
    },
    en: {
      title: "Hi, I'm Rustam.<br>Java / Backend Developer.",
      lead: "Java developer specializing in microservices with Spring Boot, PostgreSQL, Redis, and Kafka. I design robust REST APIs and optimize database performance to ensure systems handle high loads effortlessly.",
      avatarTitle: "Click to enlarge",
      avatarAlt: "Rustam Suleymanov"
    }
  },

  // 4. СЕКЦИЯ СТЕКА ТЕХНОЛОГИЙ
  skillsSection: {
    titles: {
      ru: "Стек технологий",
      en: "Tech Stack"
    },
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC / Data / Security / Actuator",
      "Hibernate",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Apache Kafka",
      "REST API",
      "WebSockets",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions, GitLab CI/CD)",
      "JUnit 5",
      "Mockito",
      "Prometheus / Grafana / Loki",
      "Maven",
      "Swagger (OpenAPI)",
      "Linux",
      "Git"
    ]
  },

  // 5. СЕКЦИЯ ВЛАДЕНИЯ ЯЗЫКАМИ
  languagesSection: {
    titles: {
      ru: "Знание языков",
      en: "Languages"
    },
    items: [
      {
        name: { ru: "Русский", en: "Russian" },
        level: { ru: "Родной", en: "Native" }
      },
      {
        name: { ru: "Английский", en: "English" },
        level: { ru: "B2 — Средне-продвинутый", en: "B2 — Upper-Intermediate" }
      }
    ]
  },

  // 6. СЕКЦИЯ ОПЫТА РАБОТЫ
  experienceSection: {
    titles: {
      ru: "Опыт разработки",
      en: "Work Experience"
    },
    stackPrefix: {
      ru: "Stack:",
      en: "Stack:"
    },
    list: [
      {
        company: {
          ru: "LekiTech Holding B.V.",
          en: "LekiTech Holding B.V."
        },
        role: {
          ru: "Java Developer",
          en: "Java Developer"
        },
        subinfo: {
          ru: "Разработка интерактивной образовательной платформы:",
          en: "Development of an interactive educational platform:"
        },
        period: {
          ru: "Апрель 2024 — Настоящее время",
          en: "April 2024 — Present"
        },
        bullets: {
          ru: [
            "Участвовал в декомпозиции монолита на микросервисы Spring Boot, что ускорило выпуск новых функций и позволило команде развивать продукт без риска остановки всей системы.",
            "Оптимизировал сложные запросы в PostgreSQL, что сократило время загрузки страниц и повысило удержание пользователей в периоды высокой активности.",
            "Внедрил кэширование в Redis, снизив нагрузку на базу данных и обеспечив стабильную работу платформы при росте числа пользователей.",
            "Перевёл отправку уведомлений в асинхронную обработку через Kafka, что ускорило выполнение пользовательских операций и уменьшило влияние внешних сервисов на основной функционал.",
            "Повысил покрытие бизнес-логики тестами JUnit 5, что сократило количество ошибок в продакшене и снизило нагрузку на поддержку.",
            "Настроил СI/CD, сократив цикл выпуска обновлений и позволив быстрее выводить изменения в продукт.",
            "Участвовал в деплое сервисов в Kubernetes с использованием rolling update, что обеспечило выпуск обновлений без простоя и потери активности пользователей.",
            "Внедрил централизованный мониторинг и логирование, что сократило время реакции на инциденты и повысило общую надёжность платформы."
          ],
          en: [
            "Participated in the decomposition of a monolith into Spring Boot microservices, accelerating feature delivery and enabling the team to scale the product without downtime risks.",
            "Optimized complex PostgreSQL queries, cutting page load times and boosting user retention during peak activity periods.",
            "Implemented Redis caching, reducing database load and ensuring platform stability under user growth.",
            "Migrated notification delivery to asynchronous Kafka processing, speeding up user operations and decoupling external service dependencies.",
            "Increased business logic test coverage using JUnit 5, reducing production bugs and support workload.",
            "Set up CI/CD pipelines, shortening release cycles and accelerating delivery to production.",
            "Participated in Kubernetes deployments using rolling updates, ensuring zero-downtime releases and seamless user sessions.",
            "Implemented centralized monitoring and logging, reducing incident response times and boosting overall platform reliability."
          ]
        },
        stack: "Java, Spring Boot (MVC, Data, Security, Actuator), Hibernate, REST API, WebSockets, Kafka, PostgreSQL, Redis, Maven, JUnit 5, Mockito, Swagger (OpenAPI), Postman, Docker, Kubernetes, Linux, Git, CI/CD (GitHub Actions, GitLab CI/CD), Prometheus, Grafana, Loki, Promtail"
      },
      {
        company: {
          ru: "Коммерческий проект (NDA)",
          en: "Commercial Project (NDA)"
        },
        role: {
          ru: "Java Developer",
          en: "Java Developer"
        },
        subinfo: {
          ru: "Разработка серверных модулей для многопользовательских систем:",
          en: "Development of server modules for multi-user high-load systems:"
        },
        period: {
          ru: "Декабрь 2020 — Апрель 2024",
          en: "December 2020 — April 2024"
        },
        bullets: {
          ru: [
            "Спроектировал архитектуру хранения данных на MySQL для сети серверов, что обеспечило стабильную работу системы под высокой нагрузкой и снизило риски простоев.",
            "Реализовал кэширование сессионных данных в памяти процесса, что уменьшило нагрузку на базу данных и сократило задержки для пользователей в периоды пиковой активности.",
            "Настроил синхронизацию между кэшем и базой, благодаря чему данные сохранялись корректно даже при сетевых сбоях, что снизило количество критичных инцидентов.",
            "Упростил архитектуру серверных модулей и разделил ответственность компонентов, что ускорило внедрение нового функционала и снизило сложность поддержки системы.",
            "Разработал библиотеку переиспользуемых компонентов, что сократило время разработки новых модулей и снизило затраты на сопровождение.",
            "Добавил централизованное логирование ключевых операций, что сократило время поиска причин сбоев и ускорило восстановление сервиса.",
            "Автоматизировал тестирование основных сценариев, что уменьшило количество ошибок после релизов и снизило риски нестабильности системы.",
            "Поддерживал production-среду, оперативно устранял инциденты и внедрял улучшения, обеспечивая устойчивую работу системы без длительных простоев."
          ],
          en: [
            "Architected MySQL data storage for a network of servers, ensuring stable high-load operations and minimizing downtime risks.",
            "Implemented in-memory process session caching, reducing database load and cutting latency during peak usage hours.",
            "Configured persistent synchronization between cache and database, preventing data loss during network failures and reducing critical incidents.",
            "Simplified server module architecture and decoupled component responsibilities, accelerating feature rollouts and easing maintenance.",
            "Built a reusable component library, cutting delivery time for new modules and lowering maintenance overhead.",
            "Added centralized logging for key operations, speeding up root-cause diagnosis and service recovery.",
            "Automated core test scenarios, reducing post-release regressions and system instability risks.",
            "Maintained production environments, resolving incidents promptly and rolling out improvements with zero prolonged downtime."
          ]
        },
        stack: "Java, MySQL, Linux, Git, Command-based protocol (RCON)"
      }
    ]
  },
  
  // 7. СЕКЦИЯ КОНТАКТОВ И СОТРУДНИЧЕСТВА
  footer: {
    ru: {
      title: "Давайте обсудим сотрудничество",
      desc: "Всегда открыт к интересным предложениям, сложным бэкенд-задачам и техническим дискуссиям.",
      btnTelegram: "Написать в Telegram",
      btnCopy: "Скопировать почту",
      btnGithub: "GitHub",
      copyright: `© ${CURRENT_YEAR} Рустам Сулейманов. All rights reserved.`,
      subtext: "Designed for clarity & performance",
      toast: "Email скопирован в буфер!"
    },
    en: {
      title: "Let's discuss opportunities",
      desc: "Always open to exciting opportunities, challenging backend problems, and technical discussions.",
      btnTelegram: "Message on Telegram",
      btnCopy: "Copy email",
      btnGithub: "GitHub",
      copyright: `© ${CURRENT_YEAR} Rustam Suleymanov. All rights reserved.`,
      subtext: "Designed for clarity & performance",
      toast: "Email copied to clipboard!"
    }
  }
};
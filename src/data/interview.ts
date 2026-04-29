export interface InterviewQuestion {
  id: string;
  level: "junior" | "mid" | "senior";
  topic: string;
  title: string;
  prompt: string[];
  options: string[];
  answer: number;
  explanation: string;
}

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: "constructor_injection_reason",
    level: "junior",
    topic: "spring",
    title: "Why constructor injection?",
    prompt: [
      "A service has one required dependency and the team is choosing between field injection and constructor injection.",
      "What is the strongest reason to prefer constructor injection?",
    ],
    options: [
      "It makes required dependencies explicit and easier to test and reason about.",
      "It removes the need for constructors in Java/Kotlin.",
      "It guarantees zero runtime configuration errors.",
    ],
    answer: 0,
    explanation:
      "Constructor injection keeps required collaborators visible at object construction time instead of hiding them in mutable fields.",
  },
  {
    id: "bean_managed_meaning",
    level: "junior",
    topic: "beans",
    title: "What bean management means",
    prompt: [
      "A candidate says Spring “manages” a bean.",
      "What should that mean concretely?",
    ],
    options: [
      "The container controls creation, wiring, lifecycle callbacks, and scope for that object.",
      "The JVM inlines the object into bytecode.",
      "The object can no longer have methods.",
    ],
    answer: 0,
    explanation:
      "Bean management is about ownership of the object graph and lifecycle, not bytecode rewriting magic.",
  },
  {
    id: "component_scan_reason",
    level: "junior",
    topic: "beans",
    title: "Why component scanning exists",
    prompt: [
      "Why does Spring support component scanning and stereotype annotations like `@Service` or `@Repository`?",
    ],
    options: [
      "To discover and register application components consistently instead of hand-wiring every class manually.",
      "To make Java syntax shorter than Kotlin.",
      "To prevent methods from throwing exceptions.",
    ],
    answer: 0,
    explanation:
      "Scanning is an object-registration mechanism that helps the container build the application graph.",
  },
  {
    id: "controller_service_split",
    level: "junior",
    topic: "web",
    title: "Controller versus service responsibility",
    prompt: [
      "A controller parses requests, runs business logic, and reaches into persistence directly.",
      "What is the strongest critique?",
    ],
    options: [
      "Transport, domain, and persistence concerns are collapsing into one boundary.",
      "Controllers are forbidden in Spring Boot.",
      "Only repositories may call services.",
    ],
    answer: 0,
    explanation:
      "The problem is architectural coupling. HTTP handling, business rules, and persistence mechanics should not be fused by default.",
  },
  {
    id: "dto_boundary_reason",
    level: "junior",
    topic: "web",
    title: "Why DTOs exist",
    prompt: [
      "Why might a team use request and response DTOs instead of exposing entities directly from controllers?",
    ],
    options: [
      "Because API shape, validation rules, and persistence shape are different concerns that often evolve independently.",
      "Because entities cannot be serialized to JSON at all.",
      "Because Spring MVC only accepts records.",
    ],
    answer: 0,
    explanation:
      "DTOs protect the external contract from leaking persistence details and let the API evolve deliberately.",
  },
  {
    id: "entity_identity",
    level: "junior",
    topic: "jpa",
    title: "Why entity identity matters",
    prompt: [
      "A candidate treats JPA entities like plain DTOs with annotations.",
      "What key concept are they missing?",
    ],
    options: [
      "The persistence context tracks managed instances by database identity over time.",
      "Entities are immutable by default.",
      "JPA disables object equality.",
    ],
    answer: 0,
    explanation:
      "Entity behavior is shaped by lifecycle and identity, not only by field values.",
  },
  {
    id: "owning_side_reason",
    level: "junior",
    topic: "jpa",
    title: "Owning side in relationships",
    prompt: [
      "Why does the owning side of a JPA association matter?",
    ],
    options: [
      "Because it controls which side updates the foreign-key relationship in persistence state.",
      "Because the non-owning side cannot be read.",
      "Because owning sides skip SQL generation.",
    ],
    answer: 0,
    explanation:
      "The owning side determines how the ORM writes relational association changes back to the database.",
  },
  {
    id: "lazy_loading_n_plus_one",
    level: "junior",
    topic: "jpa",
    title: "Lazy loading and N+1",
    prompt: [
      "A loop over parent entities touches a lazily loaded child collection and suddenly the system issues many extra queries.",
      "What happened?",
    ],
    options: [
      "Lazy loading can hide repeated database fetches when navigation patterns are not designed carefully.",
      "The compiler duplicated the loop.",
      "Spring MVC re-ran the request.",
    ],
    answer: 0,
    explanation:
      "Object navigation can hide real I/O work, which is why loading strategy and access pattern design matter.",
  },
  {
    id: "transaction_boundary_service",
    level: "mid",
    topic: "tx",
    title: "Why transaction boundaries usually live at the service layer",
    prompt: [
      "A team puts `@Transactional` directly on controllers because requests call services only once anyway.",
      "Why is that usually a weak default?",
    ],
    options: [
      "Transaction boundaries should usually align with business units of work rather than transport endpoints.",
      "Transactions do not work on controllers.",
      "Controllers cannot call repositories.",
    ],
    answer: 0,
    explanation:
      "A transport boundary and a business consistency boundary are not always the same thing.",
  },
  {
    id: "self_invocation_proxy",
    level: "mid",
    topic: "aop",
    title: "Self-invocation and proxies",
    prompt: [
      "A method annotated with `@Transactional` works when called from another bean but not when called from another method in the same class.",
      "What is the main reason?",
    ],
    options: [
      "Proxy-based interception is bypassed by self-invocation inside the same target instance.",
      "The JVM ignores annotations on Tuesdays.",
      "Transactions require Kotlin specifically.",
    ],
    answer: 0,
    explanation:
      "In common Spring proxy setups, cross-cutting behavior is applied at the proxy boundary, not on plain internal calls.",
  },
  {
    id: "readonly_transaction_meaning",
    level: "mid",
    topic: "tx",
    title: "What read-only transaction means",
    prompt: [
      "A candidate says `readOnly = true` guarantees no write can ever happen.",
      "What should a stronger answer say?",
    ],
    options: [
      "It is a hint and optimization signal whose exact effect depends on framework and database behavior.",
      "It rewrites SQL into comments only.",
      "It disables all locks at the database level.",
    ],
    answer: 0,
    explanation:
      "Read-only settings can help performance and intent, but they are not a universal hard-stop safety mechanism.",
  },
  {
    id: "exception_translation",
    level: "mid",
    topic: "mvc",
    title: "Exception translation to HTTP",
    prompt: [
      "A service throws domain or infrastructure exceptions and the API returns inconsistent response formats.",
      "What should the engineer notice first?",
    ],
    options: [
      "Error translation is not centralized, so client-facing behavior is inconsistent.",
      "The JVM cannot throw exceptions across packages.",
      "Controllers should never return HTTP status codes.",
    ],
    answer: 0,
    explanation:
      "A stable API needs a consistent error-mapping strategy instead of scattered ad hoc catch blocks.",
  },
  {
    id: "validation_boundary",
    level: "mid",
    topic: "validation",
    title: "Boundary validation reasoning",
    prompt: [
      "Why is request validation at the boundary valuable even when deeper domain rules still exist?",
    ],
    options: [
      "It rejects malformed inputs early and narrows the state space inner layers must trust.",
      "It makes business logic unnecessary.",
      "It guarantees persistence correctness.",
    ],
    answer: 0,
    explanation:
      "Boundary validation and domain validation are related but not identical responsibilities.",
  },
  {
    id: "open_session_in_view_tradeoff",
    level: "mid",
    topic: "jpa",
    title: "Open Session in View tradeoff",
    prompt: [
      "Why do many teams disable Open Session in View for APIs even though it can make lazy-loading issues appear to go away?",
    ],
    options: [
      "Because it can hide query problems and allow persistence access to leak into the web layer.",
      "Because JPA cannot work with HTTP.",
      "Because controllers are unable to read entities.",
    ],
    answer: 0,
    explanation:
      "OSIV can make code feel convenient while masking poor loading design and boundary discipline.",
  },
  {
    id: "fetch_join_limit_reason",
    level: "mid",
    topic: "jpa",
    title: "Why fetch joins are not a universal fix",
    prompt: [
      "A developer responds to every N+1 issue by adding more fetch joins.",
      "Why is that not always a safe default?",
    ],
    options: [
      "Aggressive joins can explode row counts, duplicate parent data, and make pagination or memory behavior worse.",
      "Fetch joins disable entity mapping.",
      "Fetch joins only work in tests.",
    ],
    answer: 0,
    explanation:
      "Loading strategies trade off between query count, row width, row multiplication, and access patterns.",
  },
  {
    id: "testing_pyramid_spring",
    level: "mid",
    topic: "test",
    title: "Testing pyramid in Spring",
    prompt: [
      "Why keep slice tests, service tests, and some integration tests instead of relying on only one testing style?",
    ],
    options: [
      "Different scopes provide different confidence, speed, and failure-localization tradeoffs.",
      "Spring forbids one-style testing.",
      "Only integration tests are real tests.",
    ],
    answer: 0,
    explanation:
      "Good test strategy balances speed, breadth, and the kinds of risks each layer can expose.",
  },
  {
    id: "security_filter_boundary",
    level: "mid",
    topic: "security",
    title: "Why security sits near the request boundary",
    prompt: [
      "Why are authentication and authorization often enforced in filter or interceptor style layers?",
    ],
    options: [
      "Because they are cross-cutting boundary concerns that should apply consistently before business logic runs.",
      "Because services cannot read user identity.",
      "Because security only matters for controllers.",
    ],
    answer: 0,
    explanation:
      "Access control is safer when centralized near request entry rather than scattered through business code.",
  },
  {
    id: "cache_invalidation_tradeoff",
    level: "senior",
    topic: "cache",
    title: "Caching tradeoff",
    prompt: [
      "A team adds caching everywhere after a database slowdown, but later sees stale reads and inconsistent behavior.",
      "What is the main architectural lesson?",
    ],
    options: [
      "Caching is a consistency and invalidation problem as much as a performance tool.",
      "Caches always make systems simpler.",
      "The database should be removed completely.",
    ],
    answer: 0,
    explanation:
      "Caching shifts load and latency, but it also creates coherence rules that must be designed deliberately.",
  },
  {
    id: "domain_event_boundary",
    level: "senior",
    topic: "architecture",
    title: "Domain events versus direct calls",
    prompt: [
      "When does moving from direct service calls to domain or integration events become attractive?",
    ],
    options: [
      "When workflows benefit from looser coupling, separate failure handling, and independently evolving downstream reactions.",
      "When the team wants to avoid naming methods.",
      "When strong consistency is always required everywhere.",
    ],
    answer: 0,
    explanation:
      "Events help decouple flows, but they also introduce delivery, tracing, and consistency tradeoffs.",
  },
  {
    id: "saga_vs_local_tx",
    level: "senior",
    topic: "tx",
    title: "Local transaction versus saga thinking",
    prompt: [
      "Why can a distributed business flow not be treated like one giant `@Transactional` method across services?",
    ],
    options: [
      "Because cross-service consistency usually requires explicit coordination, compensation, and failure strategy instead of pretending one process owns everything.",
      "Because Spring prohibits multiple services from talking.",
      "Because HTTP automatically rolls back remote state.",
    ],
    answer: 0,
    explanation:
      "Once work crosses service and storage boundaries, transaction reasoning becomes a workflow and compensation problem.",
  },
  {
    id: "connection_pool_exhaustion",
    level: "senior",
    topic: "ops",
    title: "Connection pool exhaustion",
    prompt: [
      "An API slows down under load even though CPU is low, and threads pile up waiting for database connections.",
      "What is the first architectural reading of that symptom?",
    ],
    options: [
      "Throughput is constrained by downstream resource capacity and request concurrency is overrunning the pool.",
      "The JVM has forgotten how to schedule threads.",
      "JSON serialization is definitely the only problem.",
    ],
    answer: 0,
    explanation:
      "Low CPU does not mean the service has spare capacity if a critical shared dependency is saturated.",
  },
  {
    id: "jpa_flush_reasoning",
    level: "senior",
    topic: "jpa",
    title: "Flush behavior reasoning",
    prompt: [
      "Why does understanding flush timing matter in real Spring Data and JPA systems?",
    ],
    options: [
      "Because SQL execution and constraint failures may happen earlier or later than the code visually suggests.",
      "Because flush changes Java syntax.",
      "Because flush disables transactions entirely.",
    ],
    answer: 0,
    explanation:
      "Persistence context state and database state do not become synchronized only at method return, so timing matters.",
  },
  {
    id: "messaging_eventual_consistency",
    level: "senior",
    topic: "messaging",
    title: "Messaging and eventual consistency",
    prompt: [
      "A team moves a critical flow to asynchronous messaging to improve latency.",
      "What tradeoff should a strong answer mention immediately?",
    ],
    options: [
      "The system gains decoupling and throughput options, but consistency, idempotency, retries, ordering, and observability become harder.",
      "Messages guarantee exactly-once business effects automatically.",
      "Asynchronous flows remove the need for error handling.",
    ],
    answer: 0,
    explanation:
      "Messaging changes where latency and coordination sit, but it also creates new correctness and debugging challenges.",
  },
  {
    id: "multi_tenant_boundary",
    level: "senior",
    topic: "architecture",
    title: "Multi-tenant design boundary",
    prompt: [
      "In a multi-tenant Spring system, why is tenant handling not just a UI concern?",
    ],
    options: [
      "Because isolation affects data access, authorization, caching keys, observability, and incident blast radius.",
      "Because tenants only matter in CSS themes.",
      "Because JPA automatically separates tenant data with no design work.",
    ],
    answer: 0,
    explanation:
      "Tenant identity has to flow through the whole stack if isolation and correctness are real requirements.",
  },
  {
    id: "monolith_to_modular_boundary",
    level: "senior",
    topic: "architecture",
    title: "Modular monolith reasoning",
    prompt: [
      "Why might a strong engineer recommend a modular monolith instead of microservices for an early product?",
    ],
    options: [
      "Because clear in-process module boundaries often deliver most design value without immediate distributed-system complexity.",
      "Because microservices are always wrong.",
      "Because Spring Boot cannot scale horizontally.",
    ],
    answer: 0,
    explanation:
      "The tradeoff is about complexity budget. Distribution should solve an actual problem, not serve as premature structure.",
  },
];

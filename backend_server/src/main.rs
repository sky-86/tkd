use actix_web::{web, App, HttpRequest, HttpServer, Result, middleware::Logger};
use actix_files::{NamedFile, Files};
use std::path::PathBuf;
use dotenv::dotenv;

/* GET /
serve the static react files on every request
*/
async fn index(_req: HttpRequest) -> Result<NamedFile> {
    let path = PathBuf::from("./dist/index.html");
    let file = match NamedFile::open(path) {
        Ok(x) => x,
        Err(e) => panic!("ERROR: Opening NamedFile; {}", e)
    };
    Ok(file)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // read .env vars and setup logger
    dotenv().ok();
    std::env::set_var("RUST_LOG", "info");
    env_logger::init();
    // set ip and port
    let ip = String::from("0.0.0.0");
    let port = std::env::var("PORT").unwrap();
    let address = format!("{}:{}", ip, port);
    log::info!("Starting server on {}", &address);

    // using react router, so every route should return the same file
    let server = HttpServer::new(|| {
        App::new()
            .wrap(Logger::default())
            .route("/", web::get().to(index))
            .route("/faq", web::get().to(index))
            .route("/instructors", web::get().to(index))
            .route("/contact", web::get().to(index))
            .route("/calendar", web::get().to(index))
            .service(Files::new("/", "./dist"))
    })
    .bind(address)?
    .run();
    server.await?;

    Ok(())
}

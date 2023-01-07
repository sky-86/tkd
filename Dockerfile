FROM rustlang/rust:nightly

WORKDIR /app
COPY . .

ARG PORT

RUN cargo build --release

CMD ["/app/target/release/tkd_rust"]
EXPOSE $PORT

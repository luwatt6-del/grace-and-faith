export default function NewsletterPage() {
  return (
    <div>
      <h1>Newsletter</h1>
      <p>Stay connected with Grace & Faith Ministries.</p>

      <form>
        <div>
          <label>Name</label><br />
          <input type="text" name="name" />
        </div>

        <div>
          <label>Email</label><br />
          <input type="email" name="email" />
        </div>

        <br />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}


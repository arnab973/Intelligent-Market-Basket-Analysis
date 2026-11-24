"""
BasketIQ Full Website Server
Serves the complete multi-page web platform on http://localhost:5000
"""

import os
import sys
import http.server
import socketserver
import webbrowser

PORT = 5000
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "website")


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()


def start_server():
    os.chdir(DIRECTORY)
    # Allow port reuse immediately
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 65)
        print("🛒 BasketIQ Modern Web Platform Server Running")
        print("=" * 65)
        print(f"  Access Portal at: {url}")
        print("  1st Page: Modern Landing Page with Login & Sign Up")
        print("  Dashboard Portal: Executive KPIs, EDA, Apriori/FP-Growth, Recommender")
        print("=" * 65)
        print("Press Ctrl+C to stop the server.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.shutdown()


if __name__ == "__main__":
    start_server()


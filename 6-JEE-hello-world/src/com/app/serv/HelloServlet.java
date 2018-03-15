package com.app.serv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = { "/hello" })
public class HelloServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// Input
		String userName = req.getParameter("userName");

		// Process
		String greetMessage = "Hello " + userName + ", Welcome to JEE-World";

		// Output
		// PrintWriter out = resp.getWriter();
		// out.println("<!DOCTYPE html>");
		// out.print("<html>");
		// out.println("<head><title> greetings </title> <link rel=\"stylesheet\"
		// href=\"css/bootstrap.css\"></head>");
		// out.println("<body>");
		// out.println("<div class=\"page-header\">JEE - web-application</div>");
		// out.println("<div class=\"well\"> ");
		// out.println(greetMessage);
		// out.println("</div>");
		// out.println("</body>");
		// out.println("</html>");
		// out.close();
		req.setAttribute("message", greetMessage);
		req.getRequestDispatcher("hello.jsp").forward(req, resp);
	}

}
